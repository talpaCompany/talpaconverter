function kiloToTon(number){
    return number / 1000
}

function kiloToGram(number){
    return number * 1000
}

function kiloToMilligram(number){
    return number * 1000000
}

function kiloToMicrogram(number){
    return number * 1000000000
}

function kiloToTonofdisplacement(number){
    return (number / 1016).toFixed(9)
}

function kiloToShortton(number){
    return (number / 907).toFixed(8)
}

function kiloToStone(number){
    return (number / 6.35).toFixed(6)
}

function kiloToPound(number){
    return number * 2.205
}

function kiloToOunce(number){
    return number * 35.274
}

export default {
    kiloToTon,
    kiloToGram,
    kiloToMilligram,
    kiloToMicrogram,
    kiloToTonofdisplacement,
    kiloToShortton,
    kiloToStone,
    kiloToPound,
    kiloToOunce
}