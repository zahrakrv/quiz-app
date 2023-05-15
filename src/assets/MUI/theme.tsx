import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'dana',
  },
});

function THEMEprovider({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export default THEMEprovider;
