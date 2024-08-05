export function convertVotes(votesAmount: number): string {
  if (votesAmount < 1000) return (votesAmount / 1000).toFixed(1) + "K";
  return Math.trunc(votesAmount / 1000) + "K";
}

export function refactorName(title: string) {
  title = title.replace("_", " ");
  let wordArr = title.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
  }

  return wordArr.join(" ");
}
export default {
  convertVotes,
};
