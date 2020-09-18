function literPer100KilometerToMilePerAmericanGallon(number){
    return 235.215 / number
}

function literPer100KilometerToMilePerImperialGallon(number){
    return 282.481 / number
}

function literPer100KilometerToKilometerPerLiter(number){
    return 100 / number
}

export default {literPer100KilometerToMilePerAmericanGallon, literPer100KilometerToMilePerImperialGallon,
    literPer100KilometerToKilometerPerLiter}