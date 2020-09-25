function microgramToTon(number){
    return number / 1000000000000
}

function microgramToKilo(number){
    return number / 1000000000
}

function microgramToGram(number){
    return number / 1000000
}

function microgramToMilligram(number){
    return number / 1000
}

function microgramToTonofdisplacement(number){
    return (number / 1016000000000000).toExponential()
}

function microgramToShortton(number){
    return (number / 907200000000000).toExponential()
}

function microgramToStone(number){
    return (number / 635000000000).toExponential()
}

function microgramToPound(number){
    return (number / 453600000000).toExponential()
}

function microgramToOunce(number){
    return (number / 28350000000).toExponential()
}

export default {
    microgramToTon,
    microgramToKilo,
    microgramToGram,
    microgramToMilligram,
    microgramToTonofdisplacement,
    microgramToShortton,
    microgramToStone,
    microgramToPound,
    microgramToOunce
}