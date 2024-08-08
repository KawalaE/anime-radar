import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from "../../src/components/SearchInput";
import HomePage from "../../src/pages/HomePage";
import Providers from "../Providers";
describe("AnimeHeading", () => {
  const renderComponent = () => {
    render(
      <>
        <SearchInput />
        <HomePage />
      </>,
      { wrapper: Providers }
    );
    return {
      user: userEvent.setup(),
      searchInput: screen.getByRole("search-bar"),
    };
  };
  it('should render "All by popularity by default"', () => {
    renderComponent();
    const genres = screen.getByText(/all/i);
    const order = screen.getAllByText(/popularity/i);
    expect(genres).toBeInTheDocument();
    expect(order.length).toBeGreaterThanOrEqual(2);
  });
  it.each([
    { button: "genres", option: "action", headingLabel: "main-heading" },
    {
      button: "order",
      option: "popularity",
      headingLabel: "secondary-heading",
    },
    { button: "type", option: "movie", headingLabel: "secondary-heading" },
    { button: "status", option: "airing", headingLabel: "secondary-heading" },
  ])(
    "should change status to $option if $button was changed",
    async ({ button, option, headingLabel }) => {
      const { user } = renderComponent();
      const filterBtn = screen.getByRole("button", {
        name: new RegExp(button, "i"),
      });
      await user.click(filterBtn);

      const optionBtn = screen.getByLabelText(new RegExp(option, "i"));
      await user.click(optionBtn);

      expect(screen.getByLabelText(headingLabel)).toHaveTextContent(
        new RegExp(option, "i")
      );
    }
  );
});
