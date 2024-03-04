export const randomizeArray = (
  inputArr: string[],
  outputArr: string[]
): string[] => {
  const randomBoolean = () => {
    if (Math.random() > 0.5) {
      return false;
    } else {
      return true;
    }
  };

  const randomIndex = (arr: string[]) => Math.floor(Math.random() * arr.length);
  if (randomBoolean()) {
    outputArr.push(inputArr[randomIndex(inputArr)]);
    return randomizeArray(inputArr, outputArr);
  } else {
    return outputArr;
  }
};
