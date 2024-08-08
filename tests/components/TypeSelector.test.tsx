import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "../../src/pages/HomePage";
import Providers from "../Providers";
import { animeData } from "../mocks/data";
//In this test suite, we utilize data from data.ts
//Names like bug, cat are tighty connected to the data.ts file

describe("TypeSelector", () => {
  const renderComponent = () => {
    render(<HomePage />, { wrapper: Providers });
    return {
      typeButton: screen.getByRole("button", { name: /type/i }),
      specType: (type: string) => screen.getByLabelText(type),
    };
  };
  it.each([
    {
      type: "tv",
      catCard: { name: animeData.data[0].title, length: 2 },
      bugCard: { name: animeData.data[1].title, length: 0 },
    },
    {
      type: "ova",
      catCard: { name: animeData.data[0].title, length: 0 },
      bugCard: { name: animeData.data[1].title, length: 2 },
    },
    {
      type: "movie",
      catCard: { name: animeData.data[0].title, length: 0 },
      bugCard: { name: animeData.data[1].title, length: 0 },
    },
  ])(
    "should render only animes that have of type $type",
    async ({ type, catCard, bugCard }) => {
      const { typeButton, specType } = renderComponent();
      const user = userEvent.setup();
      await user.click(typeButton);

      await user.click(specType(type));
      expect(screen.queryAllByText(new RegExp(catCard.name, "i")).length).toBe(
        catCard.length
      );
      expect(screen.queryAllByText(new RegExp(bugCard.name, "i")).length).toBe(
        bugCard.length
      );
    }
  );
});
