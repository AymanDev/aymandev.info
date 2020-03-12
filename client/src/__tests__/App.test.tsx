import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../elements/Title';

test('add', () => {
    render(<Title data-testid="title">test</Title>);
    expect(screen.getByTestId('title')).toHaveTextContent('test');
    // expect(add()).toBe(3);
});
