import { createGlobalStyle } from 'styled-components';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff2';

const GlobalFont = createGlobalStyle`
     @font-face {
        font-family: "pretendard";
        src: local("Ppretendard"), url(${PretendardRegular}) format('woff'); 
    }
`;

export default GlobalFont;
