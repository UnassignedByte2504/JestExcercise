const sum = (a, b) => {
  return a + b;
};

let oneEuroIs = {
  JPY: 127.9, // japan yen
  USD: 1.2, // us dollar
  GBP: 0.8, // british pound
};

const fromDollarToYen = (amount) => {
  return amount * oneEuroIs.USD * oneEuroIs.JPY;
};

const fromEuroToDollar = function (valueInEuro) {
  let valueInDollar = valueInEuro * 1.2;

  return valueInDollar;
};

const fromYenToPound = (valueInYen) => {
let YenToEuro = valueInYen / oneEuroIs.JPY;
let EuroToPound = fromEuroToDollar(YenToEuro);
let roundedYen = EuroToPound.toFixed(3);

return roundedYen;
};





console.log(sum(7, 3));



module.exports = {
  sum,
  fromDollarToYen,
  fromEuroToDollar,
  fromYenToPound,
};
