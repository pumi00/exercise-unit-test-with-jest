const sum = (a,b) => {
    return a + b;
}
const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
   
    return valueInDollar;
}
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD; 
    let valueInYen = valueInEuro * oneEuroIs.JPY;   
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

console.log(sum(7,3));

module.exports = {sum,fromDollarToYen, fromEuroToDollar, fromYenToPound};