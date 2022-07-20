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
    // const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonImg = screen.getByAltText(/charmander sprite/i);

    expect(pokemonName && pokemonImg).toBeInTheDocument();
  });

  // it('Verify if one pokemon appears at a time', () => {
  //   renderWithRouter(<App />);

  //   const imgPokemonCount = screen.getByRole('img', { name: /pikachu sprite/i });
  //   expect(imgPokemonCount).toBeCalledTimes(1);
  // });

  it('verify if the Pokédex have all filter buttons', () => {
    renderWithRouter(<App />);

    const allPokemonBtn = screen
      .getByRole('button', { name: /all/i });
    expect(allPokemonBtn).toBeVisible();

    const electricBtnFilter = screen.getByRole('button', { name: /electric/i });
    const fireBtnFilter = screen.getByRole('button', { name: /fire/i });
    const bugBtnFilter = screen.getByRole('button', { name: /bug/i });
    const poisonBtnFilter = screen.getByRole('button', { name: /poison/i });
    const psychicBtnFilter = screen.getByRole('button', { name: /psychic/i });
    const normalBtnFilter = screen.getByRole('button', { name: /normal/i });
    const dragonBtnFilter = screen.getByRole('button', { name: /dragon/i });

    expect(
      electricBtnFilter
      && fireBtnFilter
      && bugBtnFilter
      && poisonBtnFilter
      && psychicBtnFilter
      && normalBtnFilter
      && dragonBtnFilter,
    ).toBeInTheDocument();
  });

  it('Verify if just one type of pokemons apears if you push a filter button', () => {
    renderWithRouter(<App />);

    const psychicBtnFilter = screen.getByRole('button', { name: /psychic/i });
    userEvent.click(psychicBtnFilter);

    const verifyPokeType = screen.getByTestId('pokemon-type');

    expect(verifyPokeType).toBeInTheDocument();

    const nextPokemonBtn = screen
      .getByTestId('next-pokemon');
    userEvent.click(nextPokemonBtn);

    const verifyNextPokeType = screen.getByTestId('pokemon-type');

    expect(verifyNextPokeType).toBeInTheDocument();
  });
});
