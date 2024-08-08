import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes";
import { animeData, characters } from "./mocks/data";
describe("Router", () => {
  const id = animeData.data[0].mal_id;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const renderComponent = (path: string) => {
    const router = createMemoryRouter(routes, {
      initialEntries: [`${path}`],
    });
    render(
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </QueryClientProvider>
    );
  };
  it("should render the Home page for /", async () => {
    renderComponent("/");
    expect(screen.getByText(/all by/i)).toBeInTheDocument();
    expect(
      (
        await screen.findAllByText(
          new RegExp(animeData.data[0].title, "i") ||
            new RegExp(animeData.data[2].title, "i")
        )
      ).length
    ).toBeGreaterThanOrEqual(2);
  });
  it(`should render the AnimeDetailPage page for /anime/${id}`, async () => {
    renderComponent(`/anime/${id}`);
    expect(
      await screen.findByText(
        new RegExp(characters.data[0].character.name, "i")
      )
    ).toBeInTheDocument();
  });
  it("should render not found page for invalid routes", async () => {
    renderComponent("/invalid-route");
    expect(await screen.findByText(/not exist/i)).toBeInTheDocument();
  });
});
