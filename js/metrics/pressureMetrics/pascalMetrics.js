function pascalToAtm(number){
    return (number / 101325).toExponential()
}

function pascalToBar(number){
    return (number / 100000).toExponential()
}

function pascalToPsi(number){
    return (number / 6895).toFixed(9)
}

function pascalToTorr(number){
    return (number / 133).toFixed(8)
}

export default {
    pascalToAtm,
    pascalToBar,
    pascalToPsi,
    pascalToTorr
}