export const convertVotes = (votesAmount: number): string => {
  return Math.trunc(votesAmount / 1000) + "K";
};

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
