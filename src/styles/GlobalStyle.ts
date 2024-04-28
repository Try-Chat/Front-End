import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    #root{
        font-family: "pretendard";
        
        display: flex;
        justify-content: center;
        
        width: 100%;
        min-height: 100vh;
        
        background-color: #f8fafc;

        button{
            cursor: pointer;
            border: none;
        }
    }

`;

export default GlobalStyle;
