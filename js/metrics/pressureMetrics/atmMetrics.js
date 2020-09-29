function atmToBar(number){
    return number * 1.013
}

function atmToPascal(number){
    return number * 101325
}

function atmToPsi(number){
    return number * 14.696
}

function atmToTorr(number){
    return number * 760
}

export default {
    atmToBar,
    atmToPascal,
    atmToPsi,
    atmToTorr
}