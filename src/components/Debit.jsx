export function Debito(monto, balance) {
    let debito = parseInt(monto);
    let saldo = parseInt(balance);
    if (debito < 0) {
        alert("El monto no puede ser negativo")
        return saldo
    }
    if (debito > saldo) {
        alert("monto es mayor al balance")
        return saldo
    }
    saldo = saldo - debito
    return saldo
}

const Debit = ({ name, apellido, edad, description }) => {
    return <div></div>
}
export default Debit;