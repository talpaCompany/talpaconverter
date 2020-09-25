function milligramToTon(number){
    return number / 1000000000
}

function milligramToKilo(number){
    return number / 1000000
}

function milligramToGram(number){
    return number / 1000
}

function milligramToMicrogram(number){
    return number * 1000
}

function milligramToTonofdisplacement(number){
    return (number / 1016000000000).toExponential()
}

function milligramToShortton(number){
    return (number / 907200000000).toExponential()
}

function milligramToStone(number){
    return (number / 635000000).toExponential()
}

function milligramToPound(number){
    return (number / 453592).toExponential()
}

function milligramToOunce(number){
    return (number / 28350).toExponential()
}

export default {
    milligramToTon,
    milligramToKilo,
    milligramToGram,
    milligramToMicrogram,
    milligramToTonofdisplacement,
    milligramToShortton,
    milligramToStone,
    milligramToPound,
    milligramToOunce
}