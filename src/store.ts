import { create } from "zustand";

export interface AnimeQuery {
  genreId?: number;
  phrase?: string;
  orderBy?: string;
  type?: string;
  status?: string;
}

interface AnimeQueryStore {
  animeQuery: AnimeQuery;
  setSearchText: (phrase: string) => void;
  setGenreId: (genreId: number) => void;
  setOrderBy: (orderBy: string) => void;
  setTypeTo: (type: string) => void;
  setStatusTo: (status: string) => void;
}

const useAnimeQueryStore = create<AnimeQueryStore>((set) => ({
  animeQuery: {},
  setSearchText: (phrase) =>
    set((store) => ({
      animeQuery: {
        ...store.animeQuery,
        phrase: phrase,
        genreId: 0,
        orderBy: "",
        status: "",
        type: "",
      },
    })),
  setGenreId: (genreId) =>
    set((store) => ({
      animeQuery: { ...store.animeQuery, genreId: genreId, phrase: "" },
    })),
  setOrderBy: (orderBy) =>
    set((store) => ({
      animeQuery: { ...store.animeQuery, orderBy: orderBy, phrase: "" },
    })),
  setTypeTo: (type) =>
    set((store) => ({
      animeQuery: { ...store.animeQuery, type: type, phrase: "" },
    })),
  setStatusTo: (status) =>
    set((store) => ({
      animeQuery: { ...store.animeQuery, status: status, phrase: "" },
    })),
}));

export default useAnimeQueryStore;
