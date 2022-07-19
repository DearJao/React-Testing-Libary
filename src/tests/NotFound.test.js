import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Verify if the page Not Found is running correctly', () => {
  it('Verify if page have a h2 text "Page requested not found 😭"', () => {
    renderWithRouter(<NotFound />);

    const notFoundH2 = screen
      .getByRole('heading', { name: /Page requested not found Crying emoji/i });
    expect(notFoundH2).toBeInTheDocument();

    const notFoundImg = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(notFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });

  it('Verify if exist an image with the URL "https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif"', () => {
    renderWithRouter(<NotFound />);

    const notFoundImg = screen
      .getByAltText('Pikachu crying because the page requested was not found');
    expect(notFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
