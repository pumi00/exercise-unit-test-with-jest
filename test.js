const {sum} = require('./app');

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14,9);
    expect(total).toBe(23);
})




test("One euro should be 1.07 dollars", function() {
   
    const { fromEuroToDollar } = require('./app.js');

    
    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

test('Convierte 3 euros a dólares', () => {
    expect(fromEuroToDollar(3)).toBeCloseTo(3.21); 
});

test('Convierte 5 dólares a yenes', () => {
    console.log(fromDollarToYen(5));
    expect(fromDollarToYen(5)).toBeCloseTo(731.3084112149533, 2);
});

test('Convierte 1000 yenes a libras', () => {
    expect(fromYenToPound(1000)).toBeCloseTo(5.56);
});

