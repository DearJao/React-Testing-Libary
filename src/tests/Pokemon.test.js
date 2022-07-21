import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokemon from '../components/Pokemon';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

const pokemon = {
  id: 4,
  name: 'Charmander',
  type: 'Fire',
  averageWeight: {
    value: '8.5',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Alola Route 3',
      map: 'https://cdn2.bulbagarden.net/upload/9/93/Alola_Route_3_Map.png',
    },
    {
      location: 'Kanto Route 3',
      map: 'https://cdn2.bulbagarden.net/upload/4/4a/Kanto_Route_3_Map.png',
    },
    {
      location: 'Kanto Route 4',
      map: 'https://cdn2.bulbagarden.net/upload/2/24/Kanto_Route_4_Map.png',
    },
    {
      location: 'Kanto Rock Tunnel',
      map: 'https://cdn2.bulbagarden.net/upload/6/6f/Kanto_Rock_Tunnel_Map.png',
    },
  ],
  summary: 'The flame on its tail shows the strength of its life force. If it is weak,',
};

const isPokemonFavoriteById = {
  true: true,
  false: false,
};

describe('Verify the informations in the Pokemon card', () => {
  it('Verify if the name of the pokemon is on the screen', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isPokemonFavoriteById={ isPokemonFavoriteById[pokemon.id] }
    />);

    const findCharmander = screen.getByTestId('pokemon-name');

    expect(findCharmander).toHaveTextContent(/charmander/i);
  });

  it('Verify if the type of the pokemon is on the screen', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isPokemonFavoriteById={ isPokemonFavoriteById[pokemon.id] }
    />);

    const pokeType = screen
      .getByTestId('pokemon-type');

    expect(pokeType).toHaveTextContent(/fire/i);
  });

  it('Verify if the average wheight is on the screen with the right measure', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isPokemonFavoriteById={ isPokemonFavoriteById[pokemon.id] }
    />);

    const pokeWeight = screen
      .getByTestId('pokemon-weight');

    expect(pokeWeight).toHaveTextContent(/Average weight: 8.5 kg/i);
  });

  it('Verify the img informations, src and pokemon name', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isPokemonFavoriteById={ isPokemonFavoriteById[pokemon.id] }
    />);

    const pokeImg = screen.getByAltText('Charmander sprite');
    const imgLink = 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png';

    expect(pokeImg).toHaveAttribute('src', imgLink);
  });

  it('Verify if the pokemon card have an navigation link to see the pokemons details',
    () => {
      renderWithRouter(<Pokemon
        pokemon={ pokemon }
        isFavorite={ isPokemonFavoriteById[pokemon.id] }
      />);

      const moreDetailsLink = screen.getByRole('link', { name: /More details/i });

      expect(moreDetailsLink).toHaveAttribute('href', '/pokemons/4');
    });

  it('Verify if you click on more details you got redirected', () => {
    const { history } = renderWithRouter(<App />);

    const moreDetailsLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetailsLink);
    const h2Name = screen.getByText(/Pikachu details/i);
    expect(h2Name).toBeInTheDocument();
    const urlPathname = history.location.pathname;
    expect(urlPathname).toBe('/pokemons/25');
  });

  it('Verifica se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const moreDetailsLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(moreDetailsLink);
    const favCheckbox = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
    userEvent.click(favCheckbox);
    expect(screen.getByAltText('Pikachu is marked as favorite'))
      .toHaveAttribute('src', '/star-icon.svg');
  });
});
