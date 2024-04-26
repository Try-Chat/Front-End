import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle, GlobalFont } from './styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFont />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
