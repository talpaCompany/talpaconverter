function milePerImperialGallonToMilePerAmericanGallon(number){
    return (number / 1.201).toFixed(6)
}

function milePerImperialGallonToKilometerPerLiter(number){
    return (number / 2.825).toFixed(6)
}

function milePerImperialGallonToLiterPer100Kilometer(number){
    return 282.481 / number
}

export default {
    milePerImperialGallonToMilePerAmericanGallon, 
    milePerImperialGallonToKilometerPerLiter,
    milePerImperialGallonToLiterPer100Kilometer
}