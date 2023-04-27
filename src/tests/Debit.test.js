import '@testing-library/jest-dom/extend-expect'
import {Debito} from "../components/Debit";

describe('pruebas sobre el Debito', () => {
    test('debe retornar el nuevo balance', () => {
        //Arrange
        let monto = "100"
        let balance= "200"
        //Act
        let nuevoBalance = Debito(monto,balance)
        //Assert
        expect(nuevoBalance).toBeNull(100);
    });
});