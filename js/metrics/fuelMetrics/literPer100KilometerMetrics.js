function literPer100KmToAmericanGallon(number){
    return 235.215 / number
}

function literPer100KmToImperialGallon(number){
    return 282.481 / number
}

function literPer100KmToKmPerLiter(number){
    return 100 / number
}

export default {
    literPer100KmToAmericanGallon, 
    literPer100KmToImperialGallon,
    literPer100KmToKmPerLiter
}