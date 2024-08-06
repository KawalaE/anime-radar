import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AnimeCharacters from "../../src/components/AnimeCharacters";

describe("AnimeCharacters", () => {
  //id from first item from data.ts database
  const exampleId = 28623;
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
            <AnimeCharacters id={exampleId} />
          </ChakraProvider>
        </MemoryRouter>
      </QueryClientProvider>
    );
  };
  it("should render anime characters cards", () => {
    renderComponent();
    screen.debug(null, 20000);
  });
});
