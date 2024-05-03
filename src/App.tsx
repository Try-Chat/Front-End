import { Outlet } from 'react-router-dom';
import { theme } from './styles';
import { GlobalStyles, ThemeProvider } from '@mui/system';
import { globalStyle, GlobalFont } from './styles';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <GlobalFont />
        <GlobalStyles styles={{ ...globalStyle }} />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
