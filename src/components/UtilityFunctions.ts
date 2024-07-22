export const convertVotes = (votesAmount: number): string => {
  if (votesAmount < 1000) return (votesAmount / 1000).toFixed(1) + "K";
  return Math.trunc(votesAmount / 1000) + "K";
};

export const refactorName = (word: string) => {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  const removedUnderscore = capitalized.replace("_", " ");
  return removedUnderscore;
};
