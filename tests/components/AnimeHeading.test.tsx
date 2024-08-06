import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import SearchInput from "../../src/components/SearchInput";
import HomePage from "../../src/pages/HomePage";

describe("AnimeHeading", () => {
  const anime = "Bug";

  const renderComponent = () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <SearchInput />
            <HomePage />
          </ChakraProvider>
        </Router>
      </QueryClientProvider>
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
  it('should change the genre in the main title if different chosen"', async () => {
    const { user } = renderComponent();
    const genresButton = screen.getByRole("button", { name: /genres/i });
    await user.click(genresButton);

    const actionGenre = screen.getByLabelText(/action/i);
    await user.click(actionGenre);
    expect(screen.getByLabelText("main-heading")).toHaveTextContent(/action/i);
    screen.debug(null, 200000);
  });
});
