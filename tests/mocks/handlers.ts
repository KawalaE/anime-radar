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
  http.get("https://api.jikan.moe/v4/anime", () => {
    return HttpResponse.json({});
  }),
];
