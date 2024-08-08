import { render, screen } from "@testing-library/react";
import AnimeCardCarousel from "../../src/components/AnimeCardCarousel";
import { animeData } from "../mocks/data";
import Providers from "../Providers";

describe("AnimeCardCarousel", () => {
  const inputData = animeData.data[0];
  const renderComponent = () => {
    render(<AnimeCardCarousel data={inputData} />, { wrapper: Providers });
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
