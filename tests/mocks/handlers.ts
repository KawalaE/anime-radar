//define request handlers
import { http, HttpResponse } from "msw";
import { animeData, characters, genres, recommendations } from "./data";
//get anime genres

export const handlers = [
  http.get("https://api.jikan.moe/v4/genres/anime", () => {
    return HttpResponse.json(genres);
  }),
  http.get("https://api.jikan.moe/v4/anime/:id/characters", ({ params }) => {
    console.log("in characters");
    const { id } = params;
    console.log(id);
    for (const element of characters.data) {
      if (element.mal_id.toString() === id) {
        return HttpResponse.json({ data: [element] });
      }
    }
  }),
  http.get("https://api.jikan.moe/v4/anime/:id", ({ params }) => {
    const { id } = params;
    console.log("hee");
    console.log(id);
    const anime = animeData.data.filter(
      (element) => element.mal_id.toString() === id
    );
    console.log("animeid");
    console.log({ ...animeData, data: anime[0] });
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
      console.log("response");
      console.log({ data: { data: [dataResponse] } });
      return HttpResponse.json({ data: dataResponse });
    }
  ),
  http.get("https://api.jikan.moe/v4/anime", ({ request }) => {
    console.log("heading here1");
    const url = new URL(request.url);
    console.log(url.toString());
    const animePhrase = url.searchParams.get("q");
    const genreId = url.searchParams.get("genres");
    const type = url.searchParams.get("type");
    const status = url.searchParams.get("status");
    const sort = url.searchParams.get("order_by");

    const containsGenreHelper = (arr: [], id: string) => {
      if (Number(id) === 0) return true;
      for (const element of arr) {
        console.log(element);
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
    console.log("heading here2");
    if (animePhrase) {
      console.log("in phrase");
      const animePhraseLowerCase = lowerCaseSwitch(animePhrase);
      const containsPhrase = animeData.data.filter(
        (element) =>
          lowerCaseSwitch(element.title_english).match(animePhraseLowerCase) ||
          lowerCaseSwitch(element.title).match(animePhraseLowerCase)
      );
      console.log("end1");
      return HttpResponse.json({ ...animeData, data: containsPhrase });
    }
    if (genreId) {
      console.log("in genreid");
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
      console.log("in status");
      const statusMap = {
        "Finished Airing": "complete",
        "Currently Airing": "airing",
      };
      const containsStatus = animeData.data.filter(
        (element) => statusMap[element.status] === status
      );
      console.log("end4");
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
      console.log("heading here3");
      return HttpResponse.json({ ...animeData, data: sortedData });
    }
    console.log("heading here4");
    return HttpResponse.json(animeData);
  }),
];
