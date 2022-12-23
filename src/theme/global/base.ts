import { css } from "~/theme";

const base = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 16px;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: "JetBrainsMono";
    margin: 0;
  }

  svg {
    height: 100%;
    width: 100%;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }
`;

export { base };
