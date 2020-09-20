function kilogramToTon(number){
    return number / 1000
}

function kilogramToGram(number){
    return number * 1000
}

function kilogramToMilligram(number){
    return number * 1000000
}

function kilogramToMicrogram(number){
    return number * 1000000000
}

function kilogramToTonOfDisplacement(number){
    return (number / 1016).toFixed(9)
}

function kilogramToShortTon(number){
    return (number / 907).toFixed(8)
}

function kilogramToStone(number){
    return (number / 6.35).toFixed(6)
}

function kilogramToPound(number){
    return number * 2.205
}

function kilogramToOunce(number){
    return number * 35.274
}

export default {
    kilogramToTon,
    kilogramToGram,
    kilogramToMilligram,
    kilogramToMicrogram,
    kilogramToTonOfDisplacement,
    kilogramToShortTon,
    kilogramToStone,
    kilogramToPound,
    kilogramToOunce
}