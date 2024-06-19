import { Images } from "./Anime";

interface Character {
  mal_id: number;
  name: string;
  images: Images;
}
export default interface CharacterData {
  character: Character;
  role: string;
}
