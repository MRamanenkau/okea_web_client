import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
    }
    
    * {
        padding: 0;
        margin: 0;
    }
    
    #app {
        height: 100%;
    }
`;