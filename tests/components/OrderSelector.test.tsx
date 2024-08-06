import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../../src/pages/HomePage";

//In this test suite, we utilize data from data.ts
//Names like bug, cat are tighty connected to the data.ts file
//We test only one out of 4 selector choices, because it
//is time consuming and implemention heavy

describe("OrderSelector", () => {
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
      orderButton: screen.getByRole("button", { name: /order/i }),
      specOrder: (order: string) => screen.getByLabelText(order),
    };
  };
  it("should render cards sorted by the score", async () => {
    const { orderButton, specOrder } = renderComponent();
    const user = userEvent.setup();
    await user.click(orderButton);

    await user.click(specOrder("score"));

    const animes = screen.getAllByText(/cat|bug/i);

    expect(animes[0]).toHaveTextContent(/bug/i);
    expect(animes[2]).toHaveTextContent(/cat/i);
  });
});
