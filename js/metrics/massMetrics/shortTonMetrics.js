function shortTonToTon(number){
    return (number / 1.102).toFixed(6)
}

function shortTonToKilogram(number){
    return number * 907
}

function shortTonToGram(number){
    return number * 907185
}

function shortTonToMilligram(number){
    return number * 907200000000
}

function shortTonToMicrogram(number){
    return number * 907200000000000
}

function shortTonToTonOfDisplacement(number){
    return (number / 1.12).toFixed(6)
}

function shortTonToStone(number){
    return number * 143
}

function shortTonToPound(number){
    return number * 2000
}

function shortTonToOunce(number){
    return number * 32000
}

export default {
    shortTonToTon,
    shortTonToKilogram,
    shortTonToGram,
    shortTonToMilligram,
    shortTonToMicrogram,
    shortTonToTonOfDisplacement,
    shortTonToStone,
    shortTonToPound,
    shortTonToOunce
}