function micrometerToKilometer(number){
    return number / 1000000000
}

function micrometerToMeter(number){
    return number / 1000000
}

function micrometerToCentimeter(number){
    return number / 10000
}

function micrometerToMillimeter(number){
    return number / 1000
}

function micrometerToNanometer(number){
    return number * 1000
}

function micrometerToMile(number){
    number / 1609000000000
}

function micrometerToYard(number){
    return number / 914400
}

function micrometerToFeet(number){
    return number / 304800
}

function micrometerToInch(number){
    return number / 25400
}

function micrometerToNauticalMile(number){
    return number / 1852000000000
}

export default {micrometerToKilometer, micrometerToMeter, micrometerToCentimeter, micrometerToMillimeter,
    micrometerToNanometer, micrometerToMile, micrometerToYard, micrometerToFeet, micrometerToInch,
    micrometerToNauticalMile}