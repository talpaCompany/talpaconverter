function kilometerPerLiterToAmericanGallon(number){
    return number * 2.352
}

function kilometerPerLiterToImperialGallon(number){
    return number * 2.825
}

function kilometerPerLiterToLiterPer100Km(number){
    return 100 / number
}

export default {
    kilometerPerLiterToAmericanGallon, 
    kilometerPerLiterToImperialGallon,
    kilometerPerLiterToLiterPer100Km
}