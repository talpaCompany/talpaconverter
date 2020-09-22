function milePerAmericanGallonToMilePerImperialGallon(number){
    return number * 1.201
}

function milePerAmericanGallonToKilometerPerLiter(number){
    return number / 2.352
}

function milePerAmericanGallonToLiterPer100Kilometers(number){
    return 235.215 / number
}

export default {
    milePerAmericanGallonToMilePerImperialGallon, 
    milePerAmericanGallonToKilometerPerLiter,
    milePerAmericanGallonToLiterPer100Kilometers
}