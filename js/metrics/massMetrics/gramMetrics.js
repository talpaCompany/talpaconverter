function gramToTon(number){
    return number / 1000000
}

function gramToKilogram(number){
    return number / 1000
}

function gramToMilligram(number){
    return number * 1000
}

function gramToMicrogram(number){
    return number * 1000000
}

function gramToTonOfDisplacement(number){
    return (number / 1016000000).toExponential()
}

function gramToShortTon(number){
    return (number / 907185).toExponential()
}

function gramToStone(number){
    return (number / 6350).toFixed(9)
}

function gramToPound(number){
    return (number / 454).toFixed(8)
}

function gramToOunce(number){
    return (number / 28.35).toFixed(6)
}

export default {
    gramToTon,
    gramToKilogram,
    gramToMilligram,
    gramToMicrogram,
    gramToTonOfDisplacement,
    gramToShortTon,
    gramToStone,
    gramToPound,
    gramToOunce
}