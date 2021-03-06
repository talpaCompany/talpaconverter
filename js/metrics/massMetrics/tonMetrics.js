function tonToKilo(number){
    return number * 1000
}

function tonToGram(number){
    return number * 1000000
}

function tonToMilligram(number){
    return number * 1000000000
}

function tonToMicrogram(number){
    return number * 1000000000000
}

function tonToTonofdisplacement(number){
    return (number / 1.016).toFixed(6)
}

function tonToShortton(number){
    return number * 1.102
}

function tonToStone(number){
    return number * 157
}

function tonToPound(number){
    return number * 2205
}

function tonToOunce(number){
    return number * 35274
}

export default {
    tonToKilo,
    tonToGram,
    tonToMilligram,
    tonToMicrogram,
    tonToTonofdisplacement,
    tonToShortton,
    tonToStone,
    tonToPound,
    tonToOunce
}