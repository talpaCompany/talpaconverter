function shorttonToTon(number){
    return (number / 1.102).toFixed(6)
}

function shorttonToKilo(number){
    return number * 907
}

function shorttonToGram(number){
    return number * 907185
}

function shorttonToMilligram(number){
    return number * 907200000000
}

function shorttonToMicrogram(number){
    return number * 907200000000000
}

function shorttonToTonofdisplacement(number){
    return (number / 1.12).toFixed(6)
}

function shorttonToStone(number){
    return number * 143
}

function shorttonToPound(number){
    return number * 2000
}

function shorttonToOunce(number){
    return number * 32000
}

export default {
    shorttonToTon,
    shorttonToKilo,
    shorttonToGram,
    shorttonToMilligram,
    shorttonToMicrogram,
    shorttonToTonofdisplacement,
    shorttonToStone,
    shorttonToPound,
    shorttonToOunce
}