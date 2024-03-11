import { expect, test } from "vitest";
import { randomizeArray } from "../src/utils/randomizeArray";

const emptyEmpty = () => {
  expect(randomizeArray([], [])).toStrictEqual([]);
};

test("randomizeArray with two empty arrays returns empty array", emptyEmpty);

const oneItemEmpty = () => {
  const result = randomizeArray(["a"], []);

  expect(Array.isArray(result)).toBe(true);
};

test(
  "randomizeArray with one item array and empty array returns array",
  oneItemEmpty
);

const emptyOneItem = () => {
  expect(randomizeArray([], ["a"])).toStrictEqual(["a"]);
};

test(
  "randomizeArray with empty array and one item array returns the second array",
  emptyOneItem
);
