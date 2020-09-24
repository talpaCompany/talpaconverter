function ounceToTon(number){
    return (number / 35274).toExponential()
}

function ounceToKilogram(number){
    return (number / 35.274).toFixed(7)
}

function ounceToGram(number){
    return number * 28.35
}

function ounceToMilligram(number){
    return number * 28350
}

function ounceToMicrogram(number){
    return number * 28350000000
}

function ounceToDisplacementTon(number){
    return (number / 35840).toExponential()
}

function ounceToShortTon(number){
    return (number / 32000).toExponential()
}

function ounceToStone(number){
    return (number / 224).toFixed(8)
}

function ounceToPound(number){
    return number / 16
}

export default {
    ounceToTon,
    ounceToKilogram,
    ounceToGram,
    ounceToMilligram,
    ounceToMicrogram,
    ounceToDisplacementTon,
    ounceToShortTon,
    ounceToStone,
    ounceToPound
}