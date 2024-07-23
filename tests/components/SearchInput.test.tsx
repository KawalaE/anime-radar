import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import SearchInput from "../../src/components/SearchInput";

describe("SearchInput", () => {
  const title = "Anime Title";
  const renderComponent = () => {
    render(
      <Router>
        <SearchInput />
      </Router>
    );
    return {
      searchBar: screen.getByRole("search-bar"),
      user: userEvent.setup(),
    };
  };
  it("should render an search input component", () => {
    const { searchBar } = renderComponent();

    expect(searchBar).toBeInTheDocument();
  });
  it("should focus on click", async () => {
    const { user, searchBar } = renderComponent();

    await user.click(searchBar);

    expect(searchBar).toHaveFocus();
  });
  it("should render the text that user provides", async () => {
    const { user, searchBar } = renderComponent();

    await user.type(searchBar, title);

    expect(searchBar).toHaveValue(title);
  });
});
