import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AnimeCard from "../../src/components/AnimeCard";
import { convertVotes } from "../../src/components/UtilityFunctions";
import { animeData } from "../mocks/data";

describe("AnimeCard", () => {
  const dataMock = animeData.data[0];

  const renderComponent = () => {
    render(
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <AnimeCard animeInfo={dataMock} />
        </ChakraProvider>
      </BrowserRouter>
    );
  };

  //we will use for tests the first anime from the data base

  it("should render an image element", () => {
    renderComponent();
    const imgElement = screen.getByRole("img", { hidden: true });

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      dataMock.images.webp.large_image_url
    );
  });
  it("should append appropriate image source to an image element", () => {
    renderComponent();
    const imgElement = screen.getByRole("img", { hidden: true });

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      dataMock.images.webp.large_image_url
    );
  });
  it("should render title twice - main and reverse", () => {
    renderComponent();
    const titles = screen.getAllByText(
      dataMock.title_english || dataMock.title
    );
    expect(titles.length).toBe(2);
  });
  it("should render title twice - main and reverse", () => {
    renderComponent();
    const titles = screen.getAllByText(
      dataMock.title_english || dataMock.title
    );
    expect(titles.length).toBe(2);
  });
  it("should render rating twice - main and reverse", () => {
    renderComponent();
    const ratings = screen.getAllByText(dataMock.score);
    expect(ratings.length).toBe(2);
  });
  it("should render scores amount twice - main and reverse", () => {
    const scoreDataMock = convertVotes(dataMock.scored_by).toString();
    renderComponent();
    const scores = screen.getAllByText(new RegExp(scoreDataMock, "i"));
    expect(scores.length).toBe(2);
  });
  it("should render number of episodes", () => {
    renderComponent();
    const episodes = screen.getByText(
      new RegExp("Episodes: " + dataMock.episodes.toString(), "i")
    );
    expect(episodes).toBeInTheDocument();
  });
  it("should render number the status", () => {
    renderComponent();
    const episodes = screen.getByText(
      new RegExp("Status: " + dataMock.status, "i")
    );
    expect(episodes).toBeInTheDocument();
  });
  it("should render a synopsis", () => {
    renderComponent();
    const synopsis = screen.getByText(new RegExp(dataMock.synopsis, "i"));
    expect(synopsis).toBeInTheDocument();
  });
  it("should render a 'more info' button", () => {
    renderComponent();
    const button = screen.getByRole("button", { name: /info/i });
    expect(button).toBeInTheDocument();
  });
});
