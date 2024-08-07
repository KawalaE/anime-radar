import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AnimeCharacters from "../../src/components/AnimeCharacters";

describe("AnimeCharacters", () => {
  //id from first item from data.ts database
  const exampleId = 28623;
  const renderComponent = (id: number) => {
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
            <AnimeCharacters id={id} />
          </ChakraProvider>
        </MemoryRouter>
      </QueryClientProvider>
    );
  };
  it("should render anime characters heading", async () => {
    renderComponent(exampleId);
    const heading = await screen.findByText(/main characters/i);
    expect(heading).toBeInTheDocument();
  });
  it.each([
    { scenario: "Crazy Cat anime - Catty", element: "catty", id: 28623 },
    { scenario: "Lady Bug anime - Buggy", element: "buggy", id: 3332 },
  ])("card for main character of the $scenario", async ({ element, id }) => {
    renderComponent(id);
    const characterCard = await screen.findByText(new RegExp(element, "i"));

    expect(characterCard).toBeInTheDocument();
  });
});
