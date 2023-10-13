import Header from './components/skeleton/Header'
import Footer from './components/skeleton/Footer'

import { Container, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

/**
 * `App` component serving as the application's root component.
 * 
 * @function
 * @description
 * This component wraps the entire application with a Material-UI `ThemeProvider` and a `CssBaseline` for consistent baseline styling.
 * It renders the `Header`, `CurrencyConverter`, and `Footer` components, arranging them within a `Container` and `Box` components for layout styling.
 * 
 * @example
 * ```jsx
 * <App />
 * ```
 * 
 * @returns {React.ReactElement} The React element containing the structured layout of the application.
 */
function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header title='App title' />
        <Container component="main">
          {/* Main content goes here */}
         
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
    </>
  )
}

export default App
