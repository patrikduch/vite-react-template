import { render, screen } from '@testing-library/react';
import { assert, test } from 'vitest';
import HeadingText from './Heading-Text';

test('renders heading with empty title', async () => {   
    // Arrange
    const expectedTitle = '';
    const expectedEl = 'heading';

    // Act
    render(<HeadingText title={expectedTitle} />);
    const el = screen.getByRole(expectedEl);

    // Assert
    assert.equal(el != null && el.textContent == expectedTitle, true);
});


test('renders heading with filled title', async () => {
    // Arrange
    const expectedTitle = 'Convert your USD';
    const expectedEl = 'heading';

    // Act
    render(<HeadingText title={expectedTitle} />);
    const el = screen.getByRole(expectedEl);

    // Assert
    assert.equal(el != null && el.textContent == expectedTitle, true);
});