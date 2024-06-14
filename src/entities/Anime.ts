interface webpImage {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
}

interface Images {
  webp: webpImage;
}

export default interface Anime {
  mal_id: number;
  title_english: string;
  title: string;
  images: Images;
  score: number;
  scored_by: number;
}
