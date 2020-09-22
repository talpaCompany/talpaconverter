function kilometerPerLiterToMilePerAmericanGallon(number){
    return number * 2.352
}

function kilometerPerLiterToMilePerImperialGallon(number){
    return number * 2.825
}

function kilometerPerLiterToLiterPer100Kilometer(number){
    return 100 / number
}

export default {
    kilometerPerLiterToMilePerAmericanGallon, 
    kilometerPerLiterToMilePerImperialGallon,
    kilometerPerLiterToLiterPer100Kilometer
}