import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa se o topo da aplicação tem um conjunto fixo de links:', () => {
  it('verifica se existe um link para a pagina Home e se rediciona para ela', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });

    expect(homeLink).toHaveTextContent('Home');
    userEvent.click(homeLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/');

    const homeTitle = screen.getByRole('heading',
      { name: 'Encountered pokémons' });
    expect(homeTitle).toBeInTheDocument();
  });

  it('verifica se existe um link para a pagina About e se rediciona para ela', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });

    expect(aboutLink).toHaveTextContent('About');
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading',
      { name: 'About Pokédex' });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('verifica o link para a pagina Favorite Pókemons e se rediciona para ela', () => {
    const { history } = renderWithRouter(<App />);

    const favPokemonLink = screen.getByRole('link', { name: /favorite Pokémons/i });

    expect(favPokemonLink).toHaveTextContent('Favorite Pokémons');
    userEvent.click(favPokemonLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');

    const favPokemonsTitle = screen.getByRole('heading',
      { name: 'Favorite pokémons' });
    expect(favPokemonsTitle).toBeInTheDocument();
  });
});
