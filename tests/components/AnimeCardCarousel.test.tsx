import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AnimeCardCarousel from "../../src/components/AnimeCardCarousel";
import { animeData } from "../mocks/data";

describe("AnimeCardCarousel", () => {
  const inputData = animeData.data[0];
  const renderComponent = () => {
    render(
      <MemoryRouter>
        <ChakraProvider theme={theme}>
          <AnimeCardCarousel data={inputData} />
        </ChakraProvider>
      </MemoryRouter>
    );
  };
  it("should render a carousel card with correct name", () => {
    renderComponent();
    const title = screen.getByText(new RegExp(inputData.title, "i"));
    expect(title).toBeInTheDocument();
  });
  it("should render an image with correct source", () => {
    renderComponent();
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", inputData.images.webp.large_image_url);
  });
  it("should embed a link to the anime page", () => {
    renderComponent();
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/anime/${inputData.mal_id}`);
  });
});
