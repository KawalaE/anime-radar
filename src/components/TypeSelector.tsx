import useAnimeQueryStore from "../store";
import DefaultSelector from "./DefaultSelector";

const TypeSelector = () => {
  const setTypeTo = useAnimeQueryStore((s) => s.setTypeTo);
  const selectedType = useAnimeQueryStore((s) => s.animeQuery.type);
  const categoriesOfOrder = [
    "tv",
    "movie",
    "ova",
    "special",
    "ona",
    "music",
    "cm",
    "pv",
    "tv_special",
  ];
  return (
    <DefaultSelector
      selectionItems={categoriesOfOrder}
      tagName={"Type"}
      setSelectedValue={setTypeTo}
      currentSelectedValue={selectedType}
    />
  );
};

export default TypeSelector;
