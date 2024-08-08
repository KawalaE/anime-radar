import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../src/routes";

describe("Router", () => {
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
      (await screen.findAllByText(/cat || bug/i)).length
    ).toBeGreaterThanOrEqual(4);
  });
  it("should render the AnimeDetailPage page for /anime/28623", async () => {
    renderComponent("/anime/28623");
    expect(await screen.findByText(/catty/i)).toBeInTheDocument();
  });
  it("should render not found page for invalid routes", async () => {
    renderComponent("/invalid-route");
    expect(await screen.findByText(/not exist/i)).toBeInTheDocument();
  });
});
