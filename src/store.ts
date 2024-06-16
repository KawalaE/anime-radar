import { create } from "zustand";

export interface AnimeQuery {
  genreId?: number;
  phrase?: string;
}

interface AnimeQueryStore {
  animeQuery: AnimeQuery;
  setSearchText: (phrase: string) => void;
  setGenreId: (genreId: number) => void;
}

const useAnimeQueryStore = create<AnimeQueryStore>((set) => ({
  animeQuery: {},
  setSearchText: (phrase) =>
    set((store) => ({
      animeQuery: { ...store.animeQuery, phrase: phrase, genreId: 0 },
    })),
  setGenreId: (genreId) =>
    set((store) => ({
      animeQuery: { ...store.animeQuery, genreId: genreId },
    })),
}));

export default useAnimeQueryStore;
