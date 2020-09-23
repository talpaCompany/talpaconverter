function kmPerLiterToAmericanGallon(number){
    return number * 2.352
}

function kmPerLiterToImperialGallon(number){
    return number * 2.825
}

function kmPerLiterToLiterPer100Km(number){
    return 100 / number
}

export default {
    kmPerLiterToAmericanGallon, 
    kmPerLiterToImperialGallon,
    kmPerLiterToLiterPer100Km
}