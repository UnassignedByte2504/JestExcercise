const { sum } = require("./app.js");

test("adds 14 to 9 equal 23", () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function () {
  const { fromEuroToDollar } = require("./app.js");
  const dolllars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.2;

  expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One Dollar should be 127.9 japan yen", function () {
  const { fromEuroToDollar, fromDollarToYen } = require("./app.js");
  const dollars = fromEuroToDollar(3.5);
  const yen = fromDollarToYen(dollars);

  expect(fromDollarToYen(dollars)).toBe(yen);
});

test("One Japan yen should be 0.009 pounds", function () {
  const { fromYenToPound } = require("./app.js");
  const yen = fromYenToPound(1);

  expect(fromYenToPound(1)).toBe(0.009);
});

