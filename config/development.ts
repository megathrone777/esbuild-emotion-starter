import { BuildOptions } from "esbuild";
import { createServer } from "esbuild-server";
import { clean } from "esbuild-plugin-clean";
import { cwd } from "process";
import { resolve } from "path";

import { rebuildTime } from "./plugins";
import { options } from "./options";

const rootDir: string = cwd();
const publicDir: string = resolve(rootDir, "public");
const buildOptions: BuildOptions = {
  ...options,
  metafile: true,
  outdir: `${publicDir}/js`,
  plugins: [
    ...options.plugins!,
    clean({
      cleanOn: "start",
      patterns: ["build", "public/js"],
      sync: false,
      verbose: false,
    }),
    rebuildTime,
  ],
  sourcemap: "linked",
};

(async (): Promise<void> => {
  const result = await createServer(buildOptions, {
    historyApiFallback: true,
    open: true,
    port: 1337,
    static: publicDir,
  }).start();

  if (result && result.metafile) {
    console.info("Modules count: ", Object.values(result.metafile.inputs).length);
  }
})();
