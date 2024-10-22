import { render, screen } from "@testing-library/react";
import AnimeNotFound from "../../src/components/AnimeNotFound";

describe("AnimeNotFound", () => {
  const renderComponent = () => {
    render(<AnimeNotFound />);
  };
  it("should render information heading", () => {
    renderComponent();
    expect(screen.getByText(/no anime/i)).toBeInTheDocument();
  });
  it("should render 'reset filters' buttons", () => {
    renderComponent();
    const resetButton = screen.queryByRole("button", { name: /reset/i });
    expect(resetButton).toBeInTheDocument();
  });
});
