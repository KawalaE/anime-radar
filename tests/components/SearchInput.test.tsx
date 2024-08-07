import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AnimeHeading from "../../src/components/AnimeHeading";
import SearchInput from "../../src/components/SearchInput";
import HomePage from "../../src/pages/HomePage";
import Providers from "../Providers";

describe("SearchInput", () => {
  const anime = "Bug";

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
  it("should render an search input component", () => {
    renderComponent();
    expect(screen.getByRole("search-bar")).toBeInTheDocument();
  });
  it("should focus on click", async () => {
    const { user, searchInput } = renderComponent();

    await user.click(searchInput);

    expect(searchInput).toHaveFocus();
  });
  it("should render the text that user provides", async () => {
    const { user, searchInput } = renderComponent();

    await user.type(searchInput, anime);

    expect(searchInput).toHaveValue(anime);
  });
  it.each([{ animeName: "Bug" }, { animeName: "Cat" }, { animeName: "crazy" }])(
    "should only display animes with the searched input - $animeName in their name",
    async ({ animeName }) => {
      const { user, searchInput } = renderComponent();

      await user.type(searchInput, animeName + "{enter}");

      const cardNames = screen.getAllByText(new RegExp(animeName, "i"));

      //if we display only one card that matches, it counts as two because of the
      //reverse side + additional two for input field and gird heading
      expect(cardNames.length).toBe(4);
    }
  );
});
