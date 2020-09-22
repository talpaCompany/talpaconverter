function imperialGallonToAmericanGallon(number){
    return (number / 1.201).toFixed(6)
}

function imperialGallonToKilometerPerLiter(number){
    return (number / 2.825).toFixed(6)
}

function imperialGallonToLiterPer100Km(number){
    return 282.481 / number
}

export default {
    imperialGallonToAmericanGallon, 
    imperialGallonToKilometerPerLiter,
    imperialGallonToLiterPer100Km
}