function americanGallonToImperialGallon(number){
    return number * 1.201
}

function americanGallonToKilometerPerLiter(number){
    return number / 2.352
}

function americanGallonToLiterPer100Km(number){
    return 235.215 / number
}

export default {
    americanGallonToImperialGallon, 
    americanGallonToKilometerPerLiter,
    americanGallonToLiterPer100Km
}