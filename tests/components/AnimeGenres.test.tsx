import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "../../src/pages/HomePage";
import Providers from "../Providers";
import { animeData, genres } from "../mocks/data";

describe("AnimeHeading", () => {
  const renderComponent = () => {
    render(<HomePage />, { wrapper: Providers });
    return {
      genresButton: screen.getByRole("button", { name: /genres/i }),
      specGenre: (genre: string) =>
        screen.getByLabelText(new RegExp(genre, "i")),
    };
  };
  it.each([
    {
      genre: genres.data[2].name,
      firstCard: { name: animeData.data[0].title, length: 0 },
      secondCard: { name: animeData.data[1].title, length: 2 },
    },
    {
      genre: genres.data[0].name,
      firstCard: { name: animeData.data[0].title, length: 2 },
      secondCard: { name: animeData.data[1].title, length: 0 },
    },
    {
      genre: genres.data[1].name,
      firstCard: { name: animeData.data[0].title, length: 2 },
      secondCard: { name: animeData.data[1].title, length: 2 },
    },
  ])(
    "should render only animes that have the category $genre",
    async ({ genre, firstCard, secondCard }) => {
      const { genresButton, specGenre } = renderComponent();
      const user = userEvent.setup();
      await user.click(genresButton);

      await user.click(specGenre(genre));
      expect(
        screen.queryAllByText(new RegExp(firstCard.name, "i")).length
      ).toBe(firstCard.length);
      expect(
        screen.queryAllByText(new RegExp(secondCard.name, "i")).length
      ).toBe(secondCard.length);
    }
  );
});
