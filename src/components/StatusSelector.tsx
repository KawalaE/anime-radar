import useAnimeQueryStore from "../store";
import DefaultSelector from "./DefaultSelector";

const StatusSelector = () => {
  const setStatusTo = useAnimeQueryStore((s) => s.setStatusTo);
  const selectedStatus = useAnimeQueryStore((s) => s.animeQuery.status);
  const statusSelection = ["airing", "complete"];

  return (
    <DefaultSelector
      selectionItems={statusSelection}
      tagName={"Status"}
      setSelectedValue={setStatusTo}
      currentSelectedValue={selectedStatus}
    />
  );
};

export default StatusSelector;
