import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { cheeseVariantsSelector } from "../cheese/selectors";

export const ordersSelector = (state: RootState) => {
  return state.orders.orders;
};

export const orderStatusSelector = (state: RootState) => {
  return state.orders.orderStatus;
};

export const currentOrderIndexSelector = (state: RootState) => {
  return state.orders.currentOrderIndex;
};

export const currentOrderIdSelector = (state: RootState) => {
  return state.orders.currentOrderId;
};

export const currentOrderSelector = (state: RootState) => {
  return state.orders.orders[state.orders.currentOrderIndex];
};

export const randomOrderSelector = createSelector(
  [cheeseVariantsSelector],
  (cheeses) => {
    // const randomBoolean = () => {
    //   if (Math.random() > 0.5) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // };
    // const randomIndex = (arr: string[]) => Math.floor(Math.random() * arr.length);

    // const randomCheeses: string[] = [];
    // let addCheese: boolean = true;
    // const addNextCheese = () => {
    //   randomCheeses.push(cheeses[randomIndex(cheeses)]);
    //   if (randomBoolean()) {
    //     addNextCheese();
    //   }
    // };

    // if (randomBoolean()) {
    //   addNextCheese();
    // } else {
    //   addCheese = false;
    // }

    // return {
    //   addCheese: addCheese,
    //   cheeses: randomCheeses,
    // };
    const randomCheeses = randomizeArray(cheeses, []);
    console.log(randomCheeses);
  }
);

const randomizeArray = (inputArr: string[], outputArr: string[]): string[] => {
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