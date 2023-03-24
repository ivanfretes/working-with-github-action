const operaciones = require('./suma')

test('deberia retornar el resultado de la suma', () => {
   expect(operaciones.sumar(2,8)).toBe(10);
});