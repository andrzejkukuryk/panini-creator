export const randomizeValue = (inputArr: string[]): [string] => {
  const randomIndex = (arr: string[]) => Math.floor(Math.random() * arr.length);

  return [inputArr[randomIndex(inputArr)]];
};
