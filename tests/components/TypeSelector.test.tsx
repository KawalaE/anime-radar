import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../../src/pages/HomePage";

//In this test suite, we utilize data from data.ts
//Names like bug, cat are tighty connected to the data.ts file

describe("TypeSelector", () => {
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
      typeButton: screen.getByRole("button", { name: /type/i }),
      specType: (type: string) => screen.getByLabelText(type),
    };
  };
  it.each([
    {
      type: "tv",
      catCard: { name: "cat", length: 2 },
      bugCard: { name: "bug", length: 0 },
    },
    {
      type: "ova",
      catCard: { name: "cat", length: 0 },
      bugCard: { name: "bug", length: 2 },
    },
    {
      type: "movie",
      catCard: { name: "cat", length: 0 },
      bugCard: { name: "bug", length: 0 },
    },
  ])(
    "should render only animes that have of type $type",
    async ({ type, catCard, bugCard }) => {
      const { typeButton, specType } = renderComponent();
      const user = userEvent.setup();
      await user.click(typeButton);

      await user.click(specType(type));
      expect(screen.queryAllByText(new RegExp(catCard.name, "i")).length).toBe(
        catCard.length
      );
      expect(screen.queryAllByText(new RegExp(bugCard.name, "i")).length).toBe(
        bugCard.length
      );
    }
  );
});
