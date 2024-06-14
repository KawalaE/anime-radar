const convertVotes = (votesAmount: number): string => {
  return Math.trunc(votesAmount / 1000) + "K";
};
export default convertVotes;
