import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import AnimeHeading from "../../src/components/AnimeHeading";
import SearchInput from "../../src/components/SearchInput";

const anime = "Anime Title";
const renderComponent = () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <SearchInput />
        <AnimeHeading />
      </Router>
    </QueryClientProvider>
  );
};
describe("SearchInput", () => {
  it("should render an search input component", () => {
    renderComponent();
    expect(screen.getByRole("search-bar")).toBeInTheDocument();
  });
  it("should focus on click", async () => {
    renderComponent();
    const user = userEvent.setup();
    const searchInput = screen.getByRole("search-bar");

    await user.click(searchInput);

    expect(searchInput).toHaveFocus();
  });
  it("should render the text that user provides", async () => {
    renderComponent();
    const user = userEvent.setup();
    const searchInput = screen.getByRole("search-bar");

    await user.type(searchInput, anime);

    expect(searchInput).toHaveValue(anime);
  });
});

describe("SearchInput and AnimeHeading", () => {
  it("should change the name of the heading", async () => {
    renderComponent();
    const user = userEvent.setup();
    const searchInput = screen.getByRole("search-bar");
    await user.type(searchInput, anime + "{enter}");

    screen.debug();
    expect(screen.getByText(anime)).toBeInTheDocument();
  });
});
