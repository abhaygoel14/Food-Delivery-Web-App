import { sum } from "../sum";

test("check sum of 2 positive numbers", () => {
  expect(sum(1, 4)).toBe(5);
});
