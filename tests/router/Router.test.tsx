import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../../src/routes";

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
  it("should render the Home page for /", () => {
    renderComponent("/");
    expect(screen.getByText(/all by/i)).toBeInTheDocument();
  });
  //to test detail page rendering first we have to mock the server response
});
