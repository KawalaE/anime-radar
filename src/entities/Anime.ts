interface webpImage {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
}

export interface Images {
  webp: webpImage;
}
interface TrailerContent {
  images: TrailerImages;
  embed_url: string;
}
interface TrailerImages {
  large_image_url: string;
}
export interface Anime {
  mal_id: number;
  title_english: string;
  title: string;
  images: Images;
  score: number;
  scored_by: number;
  synopsis: string;
  episodes: number;
  status: string;
  trailer: TrailerContent;
}
