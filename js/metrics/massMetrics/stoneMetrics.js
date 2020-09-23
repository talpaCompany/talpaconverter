function stoneToTon(number){
    return (number / 157).toFixed(8)
}

function stoneToKilogram(number){
    return number * 6.35
}

function stoneToGram(number){
    return number * 6350
}

function stoneToMilligram(number){
    return number * 635000000
}

function stoneToMicrogram(number){
    return number * 635000000000
}

function stoneToTonOfDisplacement(number){
    return (number / 160).toFixed(5)
}

function stoneToShortTon(number){
    return (number / 143).toFixed(3)
}

function stoneToPound(number){
    return number * 14
}

function stoneToOunce(number){
    return number * 224
}

export default {
    stoneToTon,
    stoneToKilogram,
    stoneToGram,
    stoneToMilligram,
    stoneToMicrogram,
    stoneToTonOfDisplacement,
    stoneToShortTon,
    stoneToPound,
    stoneToOunce
}