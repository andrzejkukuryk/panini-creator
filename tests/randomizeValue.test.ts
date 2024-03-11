import { expect, test } from "vitest";
import { randomizeValue } from "../src/utils/randomizeValue";

const emptyArray = () => {
  const inputArr: string[] = [];
  const result = randomizeValue(inputArr);
  expect(result).toStrictEqual([""]);
};

test("Empty input array returns array with empty string", emptyArray);

const oneItem = () => {
  const inputArr = ["a"];
  const result = randomizeValue(inputArr);
  expect(result).toStrictEqual(inputArr);
};

test("One item array returns input array", oneItem);

const randomArray = () => {
  const inputArr = ["a", "b", "c", "d"];
  const result = randomizeValue(inputArr);
  expect(inputArr).toContain(result[0]);
};

test("Random array returns one of its items", randomArray);
