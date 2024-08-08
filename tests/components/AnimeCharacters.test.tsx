import { render, screen } from "@testing-library/react";
import AnimeCharacters from "../../src/components/AnimeCharacters";
import Providers from "../Providers";
import { characters } from "../mocks/data";

describe("AnimeCharacters", () => {
  const renderComponent = (id: number) => {
    render(<AnimeCharacters id={id} />, { wrapper: Providers });
  };
  it("should render anime characters heading", async () => {
    renderComponent(characters.data[0].mal_id);
    const heading = await screen.findByText(/main characters/i);
    expect(heading).toBeInTheDocument();
  });
  it("should render characters for each anime", () => {
    characters.data.forEach(async (element) => {
      renderComponent(element.mal_id);
      const characterCard = await screen.findByText(
        new RegExp(element.character.name, "i")
      );
      expect(characterCard).toBeInTheDocument();
    });
  });
});
