import { render, screen } from "@testing-library/react";
import AnimeRating from "../../src/components/AnimeRating";

describe("AnimeRating", () => {
  let scoreMock = 8.55;
  const scoredByMock = 2831806;
  const renderComponent = () => {
    render(<AnimeRating score={scoreMock} scoredBy={scoredByMock} />);
  };
  it("should render a score", () => {
    renderComponent();
    expect(screen.getByText(scoreMock.toString())).toBeInTheDocument();
  });
  it("should render a yellow star when score > 8", () => {
    renderComponent();
    expect(screen.getByLabelText(/yellow-star/i)).toBeInTheDocument();
  });
  it("should render a gray star when score < 8", () => {
    scoreMock = 8;
    renderComponent();
    expect(screen.getByLabelText(/gray/i)).toBeInTheDocument();
  });
  it("should render scored by info in correct format", () => {
    //change the test if the scoredByMock changes
    renderComponent();
    expect(screen.getByText("(2831K)")).toBeInTheDocument();
  });
});
