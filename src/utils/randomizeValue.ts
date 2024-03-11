export const randomizeValue = (inputArr: string[]): [string] => {
  const randomIndex = (arr: string[]) => Math.floor(Math.random() * arr.length);

  if (inputArr.length === 0) {
    return [""];
  } 

  return [inputArr[randomIndex(inputArr)]];
};
