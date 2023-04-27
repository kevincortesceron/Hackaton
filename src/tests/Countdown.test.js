import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, prettyDOM } from "@testing-library/react";
import Countdown from "../components/Countdown";
import { click } from "@testing-library/user-event/dist/click";
describe('pruebas sobre el componente', () => {
    test('ver si el componente está renderizando', () => {
        const componente = render(<Countdown />)
        componente.getByText('¿Cuántos segundos quieres contar?')
    });

    test('ver si el componente está renderizando opcion 2', () => {
        const componente = render(<Countdown />)
        expect(componente.container).toHaveTextContent('¿Cuántos segundos quieres contar?')
    });

    test('ver si el componente está renderizando opcion 3', () => {
        const componente = render(<Countdown />)
        const form = componente.container.querySelector('form')
        console.log(prettyDOM(form))
    });
/*
    test('simular el clic de un botón y lo ejecuta 1 vez', () => {
        // eslint-disable-next-line testing-library/render-result-naming-convention
        render();
        const mockHandle = jest.fn()
        const seconds = 4;
        // eslint-disable-next-line testing-library/render-result-naming-convention
        const componente = render(<Countdown onsub={mockHandle} />)
        // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-container
        const form = componente.container.querySelector('form')
        fireEvent.submit(form {})

        expect(mockHandle).toHaveBeenCalledTimes(1)
    });
    */
});