//define request handlers
import { animeData } from "./data";

import { http, HttpResponse } from "msw";
//get anime genres

export const handlers = [
  http.get("https://api.jikan.moe/v4/genres/anime", () => {
    return HttpResponse.json({
      data: [
        {
          mal_id: 1,
          name: "Action",
          count: 3500,
        },
        {
          mal_id: 2,
          name: "Adventure",
          count: 3600,
        },
        {
          mal_id: 4,
          name: "Comedy",
          count: 3500,
        },
      ],
    });
  }),
  http.get("https://api.jikan.moe/v4/anime", ({ request }) => {
    const url = new URL(request.url);
    const animePhrase = url.searchParams.get("q");
    const genreId = url.searchParams.get("genres");
    const type = url.searchParams.get("type");
    const status = url.searchParams.get("status");

    const containsGenreHelper = (arr: [], id: string) => {
      for (let element of arr) {
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

    if (animePhrase) {
      const animePhraseLowerCase = lowerCaseSwitch(animePhrase);
      let containsPhrase = animeData.data.filter(
        (element) =>
          lowerCaseSwitch(element.title_english).match(animePhraseLowerCase) ||
          lowerCaseSwitch(element.title).match(animePhraseLowerCase)
      );
      return HttpResponse.json({ ...animeData, data: containsPhrase });
    }
    if (genreId) {
      let containsGenre = animeData.data.filter((element) =>
        containsGenreHelper(element.genres, genreId)
      );
      return HttpResponse.json({ ...animeData, data: containsGenre });
    }
    if (type) {
      console.log(type);
      let containsType = animeData.data.filter(
        (element) => element.type === type
      );
      console.log(containsType);
      return HttpResponse.json({ ...animeData, data: containsType });
    }
    if (status) {
      let statusMap = {
        "Finished Airing": "complete",
        "Currently Airing": "airing",
      };
      let containsStatus = animeData.data.filter(
        (element) => statusMap[element.status] === status
      );
      console.log(containsStatus);
      return HttpResponse.json({ ...animeData, data: containsStatus });
    }
    return HttpResponse.json(animeData);
  }),
];
