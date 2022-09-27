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


describe("valid multiplications", ()=>{
  test("5 * 10 = 50", () => {
    expect(multiplicacion(5, 10)).toEqual(50);
  });
});

describe("valid divisions", ()=>{
  test("5 / 10 = 0.5", () => {
    expect(division(5, 10)).toEqual(0.5);
  });

  test("5 / 0 throws", () => {
    expect(()=>{
      expect(division(5, 0));
    }).toThrow();
  });

});
