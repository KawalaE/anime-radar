import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";
import AnimeHeading from "../../src/components/AnimeHeading";
import SearchInput from "../../src/components/SearchInput";
import HomePage from "../../src/pages/HomePage";

describe("AnimeGrid", () => {
  const invalidTitle = "Weird Witch";

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
            <AnimeHeading />
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
  it("should render anime not found - if given invalid input", async () => {
    const { user, searchInput } = renderComponent();

    await user.type(searchInput, invalidTitle + "{enter}");

    const notFoudHeading = screen.getByText(/no anime was found/i);
    const resetButton = screen.getByRole("button", { name: /reset/i });

    expect(notFoudHeading).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });
  it.todo(
    "should reset filters if anime not found and reset was clicked",
    async () => {
      const { user, searchInput } = renderComponent();

      await user.type(searchInput, invalidTitle + "{enter}");

      const resetButton = screen.getByRole("button", { name: /reset/i });
      expect(resetButton).toBeInTheDocument();
      await user.click(resetButton);
      screen.debug(null, 20000);
      //expect(screen.getAllByText(/all by/i).length).toBeGreaterThan(0);
    }
  );
});
