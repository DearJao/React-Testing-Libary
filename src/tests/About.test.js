import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { About } from '../pages';
import renderWithRouter from '../renderWithRouter';

describe('Verify if exist informations about the Pokédex', () => {
  it('Verify if exist two paragraph with information about pokédex', () => {
    renderWithRouter(<About />);

    const paragraph1 = (/This application ... /i);
    const paragraph2 = (/One can filter Pokémons by type.../i);
    const AboutParagraph = screen.getByText(paragraph1 && paragraph2);
    expect(AboutParagraph).toBeInTheDocument();
  });

  it('Verify if exist a h2 element with the text "About Pokédex"', () => {
    renderWithRouter(<About />);

    const aboutH2 = screen.getByRole('heading',
      { name: /about pokédex/i });
    expect(aboutH2).toHaveTextContent('About Pokédex');
  });

  it('Verify if exist an image of a Pokédex', () => {
    renderWithRouter(<About />);

    const imgPokédex = screen.getByAltText(/pokédex/i);

    expect(imgPokédex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
