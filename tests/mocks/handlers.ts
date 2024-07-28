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
          count: 30,
        },
        {
          mal_id: 2,
          name: "genre2",
          count: 50,
        },
      ],
    });
  }),
  http.get("https://api.jikan.moe/v4/anime", ({ request }) => {
    const url = new URL(request.url);
    const animePhrase = url.searchParams.get("q");

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
    return HttpResponse.json(animeData);
  }),
];
