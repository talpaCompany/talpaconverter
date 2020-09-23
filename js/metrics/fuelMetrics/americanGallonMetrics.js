function americanGallonToImperialGallon(number){
    return number * 1.201
}

function americanGallonToKmPerLiter(number){
    return number / 2.352
}

function americanGallonToLiterPer100Km(number){
    return 235.215 / number
}

export default {
    americanGallonToImperialGallon, 
    americanGallonToKmPerLiter,
    americanGallonToLiterPer100Km
}