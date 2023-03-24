const operaciones = require('./suma')

test('deberia retornar el resultado de la suma', () => {
   expect(operaciones.sumar(5,6)).toBe(12);
});