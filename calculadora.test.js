const { suma, resta, multiplicacion, division } = require("./calculadora");

describe("valid additions", () => {
  test("1 + 1 = 2", () => {
    expect(suma(1, 1)).toEqual(2);
  });

  test("10 + 20 = 30", () => {
    expect(suma(10, 20)).toEqual(30);
  });
});

describe("valid subtractions", () => {
  test("10 - 2 = 8", () => {
    expect(resta(10, 2)).toEqual(8);
  });

  test("87 - 523 = -436", () => {
    expect(resta(87, 523)).toEqual(-436);
  });
});
