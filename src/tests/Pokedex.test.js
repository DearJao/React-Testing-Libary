import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import Pokedex from '../pages/Pokedex';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

// const pokemonsMock = [
//   {
//     id: 25,
//     name: 'Pikachu',
//     type: 'Electric',
//     averageWeight: {
//       value: '6.0',
//       measurementUnit: 'kg',
//     },
//     image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
//     moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
//     foundAt: [
//       {
//         location: 'Kanto Viridian Forest',
//         map: 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png',
//       },
//       {
//         location: 'Kanto Power Plant',
//         map: 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png',
//       },
//     ],
//     summary: `This intelligent Pokémon roasts hard berries
//     with electricity to make them tender enough to eat.`,
//   },
//   {
//     id: 4,
//     name: 'Charmander',
//     type: 'Fire',
//     averageWeight: {
//       value: '8.5',
//       measurementUnit: 'kg',
//     },
//     image: 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
//   }];

describe('Verify all the functions and interactions of the page Pokedex', () => {
  it('Verify if page have a h2 text "Encountered pokémons."', () => {
    renderWithRouter(<App />);

    const pokedexH2 = screen
      .getByRole('heading', { name: /Encountered pokémons/i });
    expect(pokedexH2).toBeInTheDocument();
  });

  it('verify if the next pokemon apears after push the buttom "Proximo pokémon"', () => {
    renderWithRouter(<App />);

    const nextPokemonBtn = screen
      .getByTestId('next-pokemon');
    userEvent.click(nextPokemonBtn);

    const pokemonName = screen.getByText(/charmander/i);
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonImg = screen.getByAltText(/charmander sprite/i);

    expect(pokemonName && pokemonType && pokemonImg).toBeInTheDocument();
  });

  // it('Verify if one pokemon appears at a time', () => {
  //   renderWithRouter(<Pokedex pokemonsMock={ pokemonsMock } />);

  //   const imgPokemonCount = screen.getByTestId('pokemon-name');
  //   expect(imgPokemonCount.length).toBe(1);
  // });

  // it('', () => {
  //   renderWithRouter(<App />);

  //   const pokedexH2 = screen
  //     .getByRole('heading', { name: /Encountered pokémons/i });
  //   expect(pokedexH2).toBeInTheDocument();
  // });
});
