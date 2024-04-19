import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import darkTheme from '../../Themes/DarkTheme';
import lightTheme from '../../Themes/LightTheme';
import { CssBaseline } from '@mui/material';

type Props = {
  children: ReactNode;
}

const ThemeController = ({ children }: Props) => {
  const isDarkMode = true; // TODO: Add optional dark mode

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeController;
