import { css, Global } from "@emotion/react";
import { theme } from "./theme";

export const GlobalStyle = () => {
    return <Global styles={globalStyle} />;
};

const globalStyle = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        flex-shrink: 0;
    }
    * {
        margin: 0;
    }
    html,
    body {
        height: 100%;
    }
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    input,
    button,
    textarea,
    select {
        font: inherit;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }
    #root,
    #__next {
        isolation: isolate;
    }
`;
