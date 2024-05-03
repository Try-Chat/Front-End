import { Outlet } from 'react-router-dom';
import { theme } from './styles';
import { GlobalStyles, ThemeProvider } from '@mui/system';
import globalStyle from './styles/globalStyle';
import { CssBaseline } from '@mui/material';
import GlobalFont from './styles/GlobalFont';

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
