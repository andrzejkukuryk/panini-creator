export const uniqueValuesArray = (inputArr: string[]): string[] => {
  const uniqueArray: string[] = [];
  inputArr.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;
};
