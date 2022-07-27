function mostrarTabuada() {
    let inNumero = document.getElementById('inNumero')
    let outSaida = document.getElementById('outSaida')

    let numero = Number(inNumero.value)

    let saida = ''

    for (let i = 1; i <= 10; i++) {
        saida += `${numero} X ${i} = ${numero * i}\n`
    }

    outSaida.innerHTML = saida
}
let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', mostrarTabuada)