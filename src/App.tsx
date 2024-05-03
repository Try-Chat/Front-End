import { Outlet } from 'react-router-dom';
import { theme } from './styles';
import { GlobalStyles, ThemeProvider } from '@mui/system';
import { GlobalFont } from './styles';
import { CssBaseline } from '@mui/material';
import { globalStyle } from './styles/globalStyle';

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
