import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { convertVotes } from "../../src/components/UtilityFunctions";
import routes from "../../src/routes";
import { animeData, characters, recommendations } from "../mocks/data";

const getCharactersForId = (id: number) => {
  const character = characters.data.find((element) => element.mal_id === id);
  return character;
};
const getRecommendationsForId = (id: number) => {
  const recommendationsArr = recommendations.data.filter(
    (element) => element.mal_id === id
  );
  return recommendationsArr;
};
describe("AnimeDetailPage", () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const renderComponent = () => {
    const router = createMemoryRouter(routes, {
      initialEntries: [`/anime/${animeData.data[0].mal_id}`],
    });
    render(
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </QueryClientProvider>
    );
  };
  it(`should render the title of anime at id: ${animeData.data[0].mal_id}`, async () => {
    renderComponent();
    expect(
      await screen.findByText(animeData.data[0].title)
    ).toBeInTheDocument();
  });
  it(`should score and scored by of anime at id: ${animeData.data[0].mal_id}`, async () => {
    renderComponent();
    expect(
      await screen.findByText(animeData.data[0].score)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        "(" + convertVotes(animeData.data[0].scored_by) + ")"
      )
    ).toBeInTheDocument();
  });
  it(`should render badges of anime at id:${animeData.data[0].mal_id}`, async () => {
    renderComponent();
    expect(
      await screen.findByText("Episodes: " + animeData.data[0].episodes)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(new RegExp(animeData.data[0].type))
    ).toBeInTheDocument();
    expect(
      await screen.findByText(animeData.data[0].rating)
    ).toBeInTheDocument();
    expect(await screen.findByText(animeData.data[0].year)).toBeInTheDocument();
  });
  it(`should render synopsis of anime at id:${animeData.data[0].mal_id}`, async () => {
    renderComponent();
    expect(
      await screen.findByText(new RegExp(animeData.data[0].synopsis, "i"))
    ).toBeInTheDocument();
  });
  it(`should render trailer of anime at id:${animeData.data[0].mal_id}`, async () => {
    renderComponent();
    const trailer = await screen.findByLabelText("video-frame");
    expect(trailer).toHaveAttribute("src", animeData.data[0].trailer.embed_url);
  });
  it(`should render main characters of anime at id:${animeData.data[0].mal_id}`, async () => {
    renderComponent();
    const character = getCharactersForId(animeData.data[0].mal_id)?.character;
    expect(await screen.findByText(/main characters/i)).toBeInTheDocument();
    expect(await screen.findByText(character!.name)).toBeInTheDocument();
  });
  it(`should render recommendations for anime at id:${animeData.data[0].mal_id}`, async () => {
    renderComponent();
    const recommendedAnime = getRecommendationsForId(animeData.data[0].mal_id);
    expect(await screen.findByText("Cute cats")).toBeInTheDocument();

    for (let element of recommendedAnime) {
      console.log(element.entry.title);
      expect(await screen.findByText(element.entry.title)).toBeInTheDocument();
    }
  });
});
