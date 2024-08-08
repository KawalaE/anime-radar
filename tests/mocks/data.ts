export const animeData = {
  pagination: {
    last_visible_page: 1,
    has_next_page: false,
    current_page: 1,
    items: {
      count: 2,
      total: 2,
      per_page: 2,
    },
  },
  data: [
    {
      mal_id: 28623,
      title_english: "Crazy Cat",
      title: "Crazy Cat",
      images: {
        webp: {
          image_url: "image_fake_url",
          large_image_url: "large_image_fake_url",
          small_image_url: "small_image_fake_url",
        },
      },
      score: 7,
      scored_by: 34000,
      synopsis: "Synopsis of an anime",
      episodes: 5,
      status: "Finished Airing",
      trailer: {
        images: { large_image_url: "crazy_cat.jpg" },
        embed_url: "www.youtube/crazy-cat",
      },
      rating: "R - 17+ (violence & profanity)",
      year: 2001,
      genres: [
        {
          mal_id: 1,
          name: "Action",
          count: 44,
        },
        {
          mal_id: 2,
          name: "Adventure",
          count: 434,
        },
      ],
      type: "tv",
    },
    {
      mal_id: 3332,
      title_english: "Lady bug",
      title: "Lady bug",
      images: {
        webp: {
          image_url: "image_fake_url",
          large_image_url: "large_image_fake_url",
          small_image_url: "small_image_fake_url",
        },
      },
      score: 10,
      scored_by: 24000,
      synopsis: "Synopsis of an anime",
      episodes: 5,
      status: "Currently Airing",
      trailer: {
        images: { large_image_url: "lady_bug.jpg" },
        embed_url: "www.youtube/lady-bug",
      },
      rating: "R - 17+ (violence & profanity)",
      year: 2001,
      genres: [
        {
          mal_id: 2,
          name: "Adventure",
          count: 55,
        },
        {
          mal_id: 4,
          name: "Comedy",
          count: 99,
        },
      ],
      type: "ova",
    },
  ],
};
export const characters = {
  data: [
    {
      mal_id: 28623,
      character: {
        mal_id: 286231,
        name: "Catty",
        images: { webp: { large_image_url: "large_catty_img" } },
      },
      role: "Main",
    },

    {
      mal_id: 3332,
      character: {
        mal_id: 33321,
        name: "Buggy",
        images: { webp: { large_image_url: "large_buggy_img" } },
      },
      role: "Main",
    },
  ],
};

export const recommendations = {
  data: [
    {
      mal_id: 28623,
      entry: {
        mal_id: 286232,
        title: "Cat in the boots",
        images: { webp: { large_image_url: "large_cat_boots_img" } },
      },
      role: "Main",
    },

    {
      mal_id: 28623,
      entry: {
        mal_id: 286233,
        title: "Cute cats",
        images: { webp: { large_image_url: "large_cute_cats_img" } },
      },
      role: "Main",
    },

    {
      mal_id: 3332,
      entry: {
        mal_id: 33322,
        title: "Bug Josh",
        images: { webp: { large_image_url: "large_bug_josh_img" } },
      },
      role: "Main",
    },
  ],
};
export const genres = {
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
};
