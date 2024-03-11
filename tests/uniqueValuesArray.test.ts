import { expect, test } from "vitest";
import { uniqueValuesArray } from "../src/utils/uniqueValuesArray";

const emptyArray = () => {
  expect(uniqueValuesArray([])).toStrictEqual([]);
};

test("Empty array returns empty array", emptyArray);

const oneItem = () => {
  expect(uniqueValuesArray(["TOMATO"])).toStrictEqual(["TOMATO"]);
};

test("One item array returns itself", oneItem);

const randomValues = () => {
  expect(
    uniqueValuesArray(["a", "b", "kopytko", "A", "A", "a", "c", "kopytko"])
  ).toStrictEqual(["a", "b", "kopytko", "A", "c"]);
};

test("Random values array returns array with unique values", randomValues);

const wrongTypes = () => {
  expect(uniqueValuesArray([1, 2, true, 1])).toStrictEqual([1, 2, true]);
};

test(
  "Array with wrong type values returns unique wrong type values array",
  wrongTypes
);
