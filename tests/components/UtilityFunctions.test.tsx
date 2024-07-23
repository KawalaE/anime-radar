import { describe, expect, it } from "vitest";
import {
  convertVotes,
  refactorName,
} from "../../src/components/UtilityFunctions";

describe("convertVotes", () => {
  it("should return 1000K for  1000000 input", () => {
    const result = convertVotes(1000000);
    expect(result).toMatch(/1000k/i);
  });
  it("should return 20K for 20000 input", () => {
    const result = convertVotes(20000);
    expect(result).toMatch(/20k/i);
  });
  it("should return 0.2K for 200 input", () => {
    const result = convertVotes(200);
    expect(result).toMatch(/0.2k/i);
  });
});

describe("refactorName", () => {
  it.each([
    { name: "anime name", scenario: "upper case when lower case" },
    { name: "anime_name", scenario: "no underscore if underscore present" },
  ])("should return $scenario", ({ name }) => {
    expect(refactorName(name)).toMatch("Anime Name");
  });
});
