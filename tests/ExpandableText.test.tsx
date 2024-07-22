import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ExpandableText from "../src/components/ExpandableText";

describe("ExpandableText", () => {
  const limit = 600;
  const longText = "a".repeat(limit + 1);
  const truncatedText = longText.substring(0, limit) + "...";

  const renderComponent = (text: string) => {
    render(<ExpandableText>{text}</ExpandableText>);
    return {
      showMore: () => screen.getByRole("button", { name: /more/i }),
      showLess: () => screen.getByRole("button", { name: /less/i }),
      user: userEvent.setup(),
    };
  };
  it("should render the full text if less than limit", () => {
    const shortText = "a".repeat(20);
    renderComponent(shortText);
    expect(screen.getByText(shortText)).toBeInTheDocument();
  });
  it("should render truncated text if greater than limit", () => {
    const { showMore } = renderComponent(longText);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(showMore()).toBeInTheDocument();
  });
  it("should expand the text when 'show more' button is clicked", async () => {
    const { showMore, showLess, user } = renderComponent(longText);

    await user.click(showMore());
    expect(screen.getByText(longText)).toBeInTheDocument();

    expect(showLess()).toBeInTheDocument();
  });
  it('should collapse the text when "show less" button is clicked', async () => {
    const { showMore, showLess, user } = renderComponent(longText);
    await user.click(showMore());

    await user.click(showLess());

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
  });
});
