import { Global } from "@emotion/react";

import { css } from "~/theme";
import { base, reset } from "./global";

const GlobalStyle = (): React.ReactElement => (
  <Global
    styles={css`
      ${reset}
      ${base}
    `}
  />
);

export { GlobalStyle };
