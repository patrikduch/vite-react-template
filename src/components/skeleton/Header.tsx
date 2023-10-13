import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

/**
 * `IProps` interface for the `Header` component.
 * 
 * @interface
 * @description Defines the properties that the `Header` component expects to receive.
 * 
 * @property {string} title - The title to be displayed in the header.
 * 
 * @example
 * ```typescript
 * const props: IProps = {
 *   title: 'My Application'
 * };
 * ```
 */
interface IProps {
    title: string;
}

/**
 * `Header` component.
 * 
 * @component
 * @param {IProps} props - Properties passed to component
 * @param {string} props.title - The title to be displayed in the header.
 * 
 * @description
 * Renders an application header with a provided title. It uses Material-UI's AppBar, Toolbar, and Typography components to create a styled header bar.
 * 
 * @example
 * ```jsx
 * <Header title="My Application" />
 * ```
 * 
 * @returns {React.ReactElement} A React element containing a styled AppBar with the provided title.
 */
const Header: React.FC<IProps> = ({ title}) => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;