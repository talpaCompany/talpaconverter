function barToAtm(number){
    return (number / 1.013).toFixed(6)
}

function barToPascal(number){
    return number * 100000
}

function barToPsi(number){
    return number * 14.504
}

function barToTorr(number){
    return number * 750
}

export default {
    barToAtm,
    barToPascal,
    barToPsi,
    barToTorr
}