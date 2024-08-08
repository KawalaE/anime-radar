import { http, HttpResponse } from "msw";
import Genre from "../../src/entities/Genre";
import { animeData, characters, genres, recommendations } from "./data";
export const handlers = [
  http.get("https://api.jikan.moe/v4/genres/anime", () => {
    return HttpResponse.json(genres);
  }),
  http.get("https://api.jikan.moe/v4/anime/:id/characters", ({ params }) => {
    const { id } = params;
    for (const element of characters.data) {
      if (element.mal_id.toString() === id) {
        return HttpResponse.json({ data: [element] });
      }
    }
  }),
  http.get("https://api.jikan.moe/v4/anime/:id", ({ params }) => {
    const { id } = params;
    const anime = animeData.data.filter(
      (element) => element.mal_id.toString() === id
    );
    return HttpResponse.json({ ...animeData, data: anime[0] });
  }),
  http.get(
    "https://api.jikan.moe/v4/anime/:id/recommendations",
    ({ params }) => {
      const { id } = params;

      const dataResponse = [];
      for (const element of recommendations.data) {
        if (element.mal_id.toString() === id) {
          dataResponse.push(element);
        }
      }
      return HttpResponse.json({ data: dataResponse });
    }
  ),
  http.get("https://api.jikan.moe/v4/anime", ({ request }) => {
    const url = new URL(request.url);
    const animePhrase = url.searchParams.get("q");
    const genreId = url.searchParams.get("genres");
    const type = url.searchParams.get("type");
    const status = url.searchParams.get("status");
    const sort = url.searchParams.get("order_by");

    const containsGenreHelper = (arr: Genre[], id: string) => {
      if (Number(id) === 0) return true;
      for (const element of arr) {
        if (element.mal_id.toString() === id) return true;
      }
      return false;
    };

    const lowerCaseSwitch = (word: string) => {
      let newWord = "";
      for (let i = 0; i < word.length; i++) {
        newWord += word[i].toUpperCase();
      }
      return newWord;
    };
    if (animePhrase) {
      const animePhraseLowerCase = lowerCaseSwitch(animePhrase);
      const containsPhrase = animeData.data.filter(
        (element) =>
          lowerCaseSwitch(element.title_english).match(animePhraseLowerCase) ||
          lowerCaseSwitch(element.title).match(animePhraseLowerCase)
      );
      return HttpResponse.json({ ...animeData, data: containsPhrase });
    }
    if (genreId) {
      const containsGenre = animeData.data.filter((element) =>
        containsGenreHelper(element.genres, genreId)
      );
      return HttpResponse.json({ ...animeData, data: containsGenre });
    }
    if (type) {
      const containsType = animeData.data.filter(
        (element) => element.type === type
      );
      return HttpResponse.json({ ...animeData, data: containsType });
    }
    if (status) {
      const statusMap = {
        "Finished Airing": "complete",
        "Currently Airing": "airing",
      };
      const containsStatus = animeData.data.filter(
        (element) => statusMap[element.status] === status
      );
      return HttpResponse.json({ ...animeData, data: containsStatus });
    }
    if (sort && sort != "popularity") {
      const sortedData = [];
      let currentMax = 0;
      for (const element of animeData.data) {
        if (element.score > currentMax) {
          sortedData.unshift(element);
          currentMax = element.score;
        } else sortedData.push(element);
      }
      return HttpResponse.json({ ...animeData, data: sortedData });
    }
    return HttpResponse.json(animeData);
  }),
];
