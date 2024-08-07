import { render, screen } from "@testing-library/react";
import AnimeDetailInfo from "../../src/components/AnimeDetailInfo";

describe("AnimeDetailInfo", () => {
  const mockEpisodes = 22;
  const mockType = "tv";
  const mockRating = "PG-13";
  const mockYear = 1999;

  it("should render badges", () => {
    render(
      <AnimeDetailInfo
        episodes={mockEpisodes}
        type={mockType}
        rating={mockRating}
        year={mockYear}
      />
    );
    expect(screen.getByText(`Episodes: ${mockEpisodes}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockType}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockRating}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockYear}`)).toBeInTheDocument();
  });
});
