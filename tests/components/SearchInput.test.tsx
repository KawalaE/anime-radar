import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import AnimeHeading from "../../src/components/AnimeHeading";
import SearchInput from "../../src/components/SearchInput";

describe("SearchInput", () => {
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
  it("should change the name of the gird heading - AnimeHeading component", async () => {
    const { user, searchInput } = renderComponent();

    await user.type(searchInput, anime + "{enter}");

    expect(screen.getByText(anime)).toBeInTheDocument();
  });
});
