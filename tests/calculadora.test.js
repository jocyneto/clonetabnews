const calculadora_model = require("../models/calculadora.js");

test("Testar funcao somar, 2 + 2 = 4", () => {
  const resultado = calculadora_model.somar(2, 2);
  expect(resultado).toBe(4);
});
