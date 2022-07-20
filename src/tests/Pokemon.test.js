import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Pokedex from '../pages/Pokedex';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Verify all the functions and interactions of the page Pokedex', () => {
  it('Verify if page have a h2 text "Encountered pokémons."', () => {
    renderWithRouter(<App />);

    const pokedexH2 = screen
      .getByRole('heading', { name: /Encountered pokémons/i });
    expect(pokedexH2).toBeInTheDocument();
  });
});
