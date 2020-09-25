function poundToTon(number){
    return (number / 2205).toFixed(9)
}

function poundToKilo(number){
    return (number / 2.205).toFixed(6)
}

function poundToGram(number){
    return number * 454
}

function poundToMilligram(number){
    return number * 453592
}

function poundToMicrogram(number){
    return number * 453600000000
}

function poundToTonofdisplacement(number){
    return (number / 2240).toFixed(9)
}

function poundToShortton(number){
    return number / 2000
}

function poundToStone(number){
    return (number / 14).toFixed(7)
}

function poundToOunce(number){
    return number * 16
}

export default {
    poundToTon,
    poundToKilo,
    poundToGram,
    poundToMilligram,
    poundToMicrogram,
    poundToTonofdisplacement,
    poundToShortton,
    poundToStone,
    poundToOunce
}