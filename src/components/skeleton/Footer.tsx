import { Container, Box, Typography } from '@mui/material';

/**
 * `Footer` component.
 * 
 * @component
 * 
 * @description
 * Renders a footer containing the author's name and a brief description or note. 
 * The footer is built using Material-UI's Box, Container, and Typography components.
 * 
 * @example
 * ```jsx
 * <Footer />
 * ```
 * 
 * @returns {React.ReactElement} A React element that represents a footer with the author's name and a description.
 */
const Footer: React.FC = () => {
    
    return (
        <Box component="footer" py={2}>
          <Container>
            <Typography variant="h6" color="text.primary">Author: Bc. Patrik Duch</Typography>
          </Container>
        </Box>
    );
}

export default Footer;