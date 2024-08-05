import { render, screen } from "@testing-library/react";
import DefaultSelector from "../../src/components/DefaultSelector";

describe("DefaultSelector", () => {
  const tagNameMock = "Tag";
  const itemsMock = ["Item1", "Item2"];
  let selectedValueMock = "";
  const setSelectedValueMock = (value: string) => (selectedValueMock += value);

  const renderComponent = () => {
    render(
      <DefaultSelector
        selectionItems={itemsMock}
        tagName={tagNameMock}
        setSelectedValue={setSelectedValueMock}
        currentSelectedValue={selectedValueMock}
      />
    );
  };

  it("should render a selector button with a tag name", async () => {
    renderComponent();
    const tagButton = screen.getByRole("button", {
      name: new RegExp(tagNameMock, "i"),
    });
    expect(tagButton).toBeInTheDocument();
  });
  it("should render all of options", async () => {
    renderComponent();
    //we do not need to click the tag button in order
    //to have options visible in the DOM
    //their apperance is controlled by the css visibility
    //we won't be testing css in this suite
    itemsMock.forEach((item) => {
      expect(screen.getByText(new RegExp(item, "i"))).toBeInTheDocument();
    });
    screen.debug();
  });
});
