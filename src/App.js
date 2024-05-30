import './App.css';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './views/home';
import colors from './styles/palette';

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    color: colors.text,
  },
  palette: {
    mode: 'light',
    contrast: '#FFF',
    main: colors.main,
    icon: {
      main: colors.success,
    },
    btn: {
      main: colors.main,
      secondary: colors.purple,
    },
    background: {
      main: colors.background,
      secondary: colors.inputBackground,
      extra: colors.purple,
    },
    shadow: {
      main: colors.shadow,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
