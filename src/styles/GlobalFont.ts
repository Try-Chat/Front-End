import { createGlobalStyle } from 'styled-components';
import SpoqaHanSansNeo from '../assets/fonts/SpoqaHanSansNeo-Regular.ttf';

const GlobalFont = createGlobalStyle`
     @font-face {
        font-family: "spoqaHanSansNeo";
        src: local("SpoqaHanSansNeo"), url(${SpoqaHanSansNeo}); 
    }
`;

export default GlobalFont;
