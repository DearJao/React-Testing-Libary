import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FavoritePokemons } from '../pages';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Verify the informations of the page "Favorite Pokémons"', () => {
  it('verify if the text "No favorite pokemon found" if don´t have pokémons', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFoundText = screen.getByText(/no favorite.../i);

    expect(noFoundText).toBeInTheDocument();
  });

  it('Verify if all the card apears in the page', () => {
    renderWithRouter(<App />);

    const detailsPage = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsPage);

    const favCheckbox = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    userEvent.click(favCheckbox);

    const favPokemonsLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(favPokemonsLink).toBeInTheDocument();
    userEvent.click(favPokemonsLink);

    const pokemonName = screen.getByText('Pikachu');
    const pokemonType = screen.getByText('Electric');
    const pokemonImg = screen.getByAltText('Pikachu sprite');

    expect(pokemonName && pokemonType && pokemonImg).toBeInTheDocument();
  });
});
