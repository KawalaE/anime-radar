export const convertVotes = (votesAmount: number): string => {
  return Math.trunc(votesAmount / 1000) + "K";
};

export const refactor = (word: string) => {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  const removedUnderscore = capitalized.replace("_", " ");
  return removedUnderscore;
};
