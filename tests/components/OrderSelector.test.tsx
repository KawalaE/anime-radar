import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "../../src/pages/HomePage";
import Providers from "../Providers";
import { animeData } from "../mocks/data";
//In this test suite, we utilize data from data.ts
//Names like bug, cat are tighty connected to the data.ts file
//We test only one out of 4 selector choices, because it
//is time consuming and implemention heavy

describe("OrderSelector", () => {
  const renderComponent = () => {
    render(<HomePage />, { wrapper: Providers });
    return {
      orderButton: screen.getByRole("button", { name: /order/i }),
      specOrder: (order: string) => screen.getByLabelText(order),
    };
  };
  it("should render cards sorted by the score", async () => {
    const { orderButton, specOrder } = renderComponent();
    const user = userEvent.setup();
    const firstAnimeTitle = animeData.data[0].title;
    const secondAnimeTitle = animeData.data[1].title;

    await user.click(orderButton);

    await user.click(specOrder("score"));

    const animes = screen.getAllByText(/cat|bug/i);

    expect(animes[0]).toHaveTextContent(new RegExp(secondAnimeTitle, "i"));
    expect(animes[2]).toHaveTextContent(new RegExp(firstAnimeTitle, "i"));
  });
});
