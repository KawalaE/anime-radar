import { ChakraProvider, theme } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import AnimeTrailer from "../../src/components/AnimeTrailer";

describe("AnimeTrailer", () => {
  const urlMock = "fake-url";
  const renderComponent = () => {
    render(
      <ChakraProvider theme={theme}>
        <AnimeTrailer url={urlMock} />
      </ChakraProvider>
    );
  };

  it("should render frame element with correct src attribute", () => {
    renderComponent();
    screen.debug(null, 20000);
    const frame = screen.getByLabelText("video-frame");

    expect(frame).toBeInTheDocument();
    expect(frame).toHaveAttribute("src", urlMock);
  });
});
