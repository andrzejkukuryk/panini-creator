import { expect, test } from "vitest";
import { uniqueValuesArray } from "./uniqueValuesArray";

const emptyArray = () => {
  expect(uniqueValuesArray([])).toStrictEqual([]);
};

const oneItem = () => {
  expect(uniqueValuesArray(["TOMATO"])).toStrictEqual(["TOMATO"]);
};

const randomValues = () => {
  expect(
    uniqueValuesArray(["a", "b", "kopytko", "A", "A", "a", "c", "kopytko"])
  ).toStrictEqual(["a", "b", "kopytko", "A", "c"]);
};

const wrongTypes = () => {
  expect(uniqueValuesArray([1, 2, true, 1])).toStrictEqual([1, 2, true]);
};

const tests = [emptyArray, oneItem, randomValues, wrongTypes];

tests.forEach((unit) =>
  test("Function returns array with unique values", unit)
);
