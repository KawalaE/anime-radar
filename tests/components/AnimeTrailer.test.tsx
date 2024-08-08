import { render, screen } from "@testing-library/react";
import AnimeTrailer from "../../src/components/AnimeTrailer";
import Providers from "../Providers";

describe("AnimeTrailer", () => {
  const urlMock = "fake-url";
  const renderComponent = () => {
    render(<AnimeTrailer url={urlMock} />, { wrapper: Providers });
  };

  it("should render frame element with correct src attribute", () => {
    renderComponent();
    const frame = screen.getByLabelText("video-frame");

    expect(frame).toBeInTheDocument();
    expect(frame).toHaveAttribute("src", urlMock);
  });
});
