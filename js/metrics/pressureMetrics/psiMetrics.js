function psiToAtm(number){
    return (number / 14.696).toFixed(6)
}

function psiToBar(number){
    return (number / 14.504).toFixed(7)
}

function psiToPascal(number){
    return number * 6895
}

function psiToTorr(number){
    return number * 51.715
}

export default {
    psiToAtm,
    psiToBar,
    psiToPascal,
    psiToTorr
}