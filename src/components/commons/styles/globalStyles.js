import { css } from '@emotion/react';

export const globalStyles = css`
    @font-face {
        font-family: "NotoSansKR-Regular";
        src: url("/font/NotoSansKR-Regular.ttf");
    }

    @font-face {
        font-family: "NotoSansKR-Bold";
        src: url("/font/NotoSansKR-Bold.ttf");
    }

    @font-face {
        font-family: "NotoSansKR-ExtraLight";
        src: url("/font/NotoSansKR-ExtraLight.ttf");
    }

    * {
        font-family: 'NotoSansKR-Regular', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`