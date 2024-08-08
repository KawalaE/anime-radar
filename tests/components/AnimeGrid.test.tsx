import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AnimeHeading from "../../src/components/AnimeHeading";
import SearchInput from "../../src/components/SearchInput";
import HomePage from "../../src/pages/HomePage";
import Providers from "../Providers";
import { animeData } from "../mocks/data";

describe("AnimeGrid", () => {
  const invalidTitle = "Weird Witch";

  const renderComponent = () => {
    render(
      <>
        <SearchInput />
        <AnimeHeading />
        <HomePage />
      </>,
      { wrapper: Providers }
    );
    return {
      user: userEvent.setup(),
      searchInput: screen.getByRole("search-bar"),
    };
  };
  it("should render anime not found - if given invalid input", async () => {
    const { user, searchInput } = renderComponent();

    await user.type(searchInput, invalidTitle + "{enter}");
    const notFoudHeading = screen.getByText(/no anime was found/i);
    const resetButton = screen.getByRole("button", { name: /reset/i });

    expect(notFoudHeading).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });
  it("should reset filters if anime not found and reset was clicked", async () => {
    const { user, searchInput } = renderComponent();
    const firstAnimeTitle = animeData.data[0].title;
    const secondAnimeTitle = animeData.data[1].title;
    await user.type(searchInput, invalidTitle + "{enter}");

    const resetButton = screen.getByRole("button", { name: /reset/i });
    expect(resetButton).toBeInTheDocument();

    await user.click(resetButton);

    expect(screen.getAllByText(/all by/i).length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(
        new RegExp(firstAnimeTitle, "i") || new RegExp(secondAnimeTitle, "i")
      ).length
    ).toBeGreaterThan(0);
  });
});
