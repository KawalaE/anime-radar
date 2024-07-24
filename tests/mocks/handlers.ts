//define request handlers

import { http, HttpResponse } from "msw";
//get anime genres
export const handlers = [
  http.get("https://api.jikan.moe/v4/genres/anime", () => {
    return HttpResponse.json({
      data: [
        {
          mal_id: 1,
          name: "genre1",
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
    const inputPhrase = url.searchParams.get("q");
    console.log(inputPhrase);
    return HttpResponse.json({
      data: [
        {
          mal_id: 0,
          url: "string",
          images: {},
          trailer: {},

          title: `${inputPhrase}`,
          title_english: `${inputPhrase}`,

          type: "TV",

          episodes: 0,
          status: "Finished Airing",

          rating: "G - All Ages",
          score: 0,
          scored_by: 0,

          synopsis: "string",
          year: 0,
          broadcast: {},

          genres: [],
        },
      ],
    });
  }),
];
