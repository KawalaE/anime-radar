import useAnimeQueryStore from "../store";
import DefaultSelector from "./DefaultSelector";

const OrderSelector = () => {
  const setOrderBy = useAnimeQueryStore((s) => s.setOrderBy);
  const selectedOrder = useAnimeQueryStore((s) => s.animeQuery.orderBy);
  return (
    <DefaultSelector
      selectionItems={["popularity", "score", "favorites", "scored_by"]}
      tagName={"Order by"}
      setSelectedValue={setOrderBy}
      currentSelectedValue={selectedOrder}
    />
  );
};

export default OrderSelector;
