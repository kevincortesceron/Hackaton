import { titleCase } from "../components/ProfileCard";

import { mayorDeEdad } from "../components/ProfileCard";
describe('funciones dentro del componente profileCard', () => {
  describe('pruebas sobre el titlecase', () => {
    test('debe retornar un string', () => {
      const result = titleCase('Un valor');
      expect(typeof result).toBe('string');
    });

    test('debe retornar el string transformado a mayuscula', () => {
      expect(titleCase('en un lugar de la mancha')).toBe('En Un Lugar De La Mancha');
    });

    test('debe retornar un string vacío', () => {
        expect(titleCase('')).toBe('');
      });
  });   

  describe('mayor de edad',()=>{

    test('debe retornar un boolean si es mayor de edad',()=>{
        expect(typeof mayorDeEdad(19)).toBe('boolean');

    });

    test('si es mayor de edad devuelve true',()=>{
        expect(typeof mayorDeEdad(34)).toBeTruthy();

    });

    test('si la edad es 18 devuelve true',()=>{
        expect(mayorDeEdad(18)).toBeTruthy();

    });

    test('si la edad es menor que 18 devuelve false',()=>{
        expect(mayorDeEdad(15)).toBeFalsy();

    });

    test('si la edad es negativa devuelve un null',()=>{
        expect(mayorDeEdad(-5)).toBeNull();

    });
  })
});