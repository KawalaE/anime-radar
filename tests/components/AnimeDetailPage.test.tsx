import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AnimeDetailPage from "../../src/components/AnimeDetailPage";

describe("AnimeDetailPage", () => {
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
            <AnimeDetailPage />
          </ChakraProvider>
        </MemoryRouter>
      </QueryClientProvider>
    );
  };
  it("should", () => {
    renderComponent();
    screen.debug(null, 2000);
  });
});
