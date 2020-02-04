import { Drink } from './../src/boba-shop';

describe('Drink', () => {

  var drink;

  beforeEach(() => {
    drink = new Drink();
  });

  test('should correctly create a new drink object with quantity, toppings, size, sugar level and price', () => {
    expect(drink.quantity).toEqual(0);
    expect(drink.toppings).toEqual([]);
    expect(drink.size).toEqual("");
    expect(drink.sugar).toEqual(100);
    expect(drink.price).toEqual(3);
  });

  test('should add number of drinks to quantity of drink object', () => {
    drink.addQuantity(5);
    expect(drink.quantity).toEqual(5);
  })


});