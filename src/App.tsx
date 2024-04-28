import { Outlet } from 'react-router-dom';
import { theme, GlobalStyle, GlobalFont } from './styles';
import { ThemeProvider } from 'styled-components';

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
