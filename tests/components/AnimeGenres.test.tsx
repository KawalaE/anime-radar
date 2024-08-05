import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../../src/pages/HomePage";

//In this test suite, we utilize data from data.ts
//Names like bug, cat are tighty connected to the data.ts file
// Purpose

describe("AnimeHeading", () => {
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
        <MemoryRouter>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <HomePage />
          </ChakraProvider>
        </MemoryRouter>
      </QueryClientProvider>
    );
    return {
      genresButton: screen.getByRole("button", { name: /genres/i }),
      specGenre: (genre: string) =>
        screen.getByLabelText(new RegExp(genre, "i")),
    };
  };
  it.each([
    {
      genre: "comedy",
      catCard: { name: "cat", length: 0 },
      bugCard: { name: "bug", length: 2 },
    },
    {
      genre: "action",
      catCard: { name: "cat", length: 2 },
      bugCard: { name: "bug", length: 0 },
    },
    {
      genre: "adventure",
      catCard: { name: "cat", length: 2 },
      bugCard: { name: "bug", length: 2 },
    },
  ])(
    "should render only animes that have the category $genre",
    async ({ genre, catCard, bugCard }) => {
      const { genresButton, specGenre } = renderComponent();
      const user = userEvent.setup();
      await user.click(genresButton);

      await user.click(specGenre(genre));
      expect(screen.queryAllByText(new RegExp(catCard.name, "i")).length).toBe(
        catCard.length
      );
      expect(screen.queryAllByText(new RegExp(bugCard.name, "i")).length).toBe(
        bugCard.length
      );
    }
  );
});
