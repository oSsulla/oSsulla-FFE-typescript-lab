import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import { colorStack } from './colorStack';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        font-size: 16px;
    }

    body {
        background: #060604;
        overflow: hidden;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
    }
    a, p {
        color: ${colorStack.white};
        font-size: 1rem;
        margin: 0 35px;
        padding-top: 25px;
        text-decoration: none;
        text-transform: uppercase;
    }`