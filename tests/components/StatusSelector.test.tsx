import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "../../src/pages/HomePage";
import Providers from "../Providers";
import { animeData } from "../mocks/data";

describe("StatusSelector", () => {
  const renderComponent = () => {
    render(<HomePage />, { wrapper: Providers });
    return {
      statusButton: screen.getByRole("button", { name: /status/i }),
      specStatus: (statusBtn: string) =>
        screen.getByLabelText(new RegExp(statusBtn, "i")),
    };
  };
  it.each([
    {
      status: "complete",
      catCard: { name: animeData.data[0].title, length: 2 },
      bugCard: { name: animeData.data[1].title, length: 0 },
    },
    {
      status: "airing",
      catCard: { name: animeData.data[0].title, length: 0 },
      bugCard: { name: animeData.data[1].title, length: 2 },
    },
  ])(
    "should render only animes that have of type $type",
    async ({ status, catCard, bugCard }) => {
      const { statusButton, specStatus } = renderComponent();
      const user = userEvent.setup();
      await user.click(statusButton);

      await user.click(specStatus(status));

      expect(screen.queryAllByText(new RegExp(catCard.name, "i")).length).toBe(
        catCard.length
      );
      expect(screen.queryAllByText(new RegExp(bugCard.name, "i")).length).toBe(
        bugCard.length
      );
    }
  );
});
