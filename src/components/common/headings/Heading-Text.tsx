import { Typography, styled } from "@mui/material";

/**
 * `IProps` interface for the `HeadingText` component.
 *
 * @interface
 * @description Defines the properties that the `HeadingText` component expects to receive.
 *
 * @property {string} title - The title text to be displayed as a heading.
 *
 * @example
 * ```typescript
 * const props: IProps = {
 *   title: 'Your Heading Text Here'
 * };
 * ```
 */
interface IProps {
  title: string;
}

/**
 * `HeadingText` component.
 *
 * @component
 * @param {IProps} props - Properties passed to component
 * @param {string} props.title - The title text to be displayed as a heading.
 *
 * @description
 * Renders a heading text using Material-UI's Typography component.
 * The heading is styled as an h3 element but is semantically an h1 element, with a gutter at the bottom.
 *
 * @example
 * ```jsx
 * <HeadingText title="Your Heading Text Here" />
 * ```
 *
 * @returns {React.ReactElement} A React element containing the specified title as a heading.
 */
const HeadingText: React.FC<IProps> = ({ title }) => {
  const TextStyled = styled("span")({
    fontSize: "0.4em",
  });

  return (
    <Typography variant="h1" component="h1" gutterBottom>
      <TextStyled>{title}</TextStyled>
    </Typography>
  );
};

export default HeadingText;
