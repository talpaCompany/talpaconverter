function millimeterToKilometer(number){
    return number / 1000000
}

function millimeterToMeter(number){
   return number / 1000
}

function millimeterToCentimeter(number){
    return number / 10
}

function millimeterToMicrometer(number){
    return number * 1000
}

function millimeterToNanometer(number){
    return number * 1000000
}

function millimeterToMile(number){
    return number / 1609000
}

function millimeterToYard(number){
    return number / 914
}

function millimeterToFeet(number){
    return number / 305
}

function millimeterToInch(number){
    return (number / 25.4).toFixed(7)
}

function millimeterToNauticalMile(number){
    return number / 185200
}

export default {
    millimeterToKilometer, 
    millimeterToMeter, 
    millimeterToCentimeter, 
    millimeterToMicrometer,
    millimeterToNanometer, 
    millimeterToMile, 
    millimeterToYard, 
    millimeterToFeet, 
    millimeterToInch,
    millimeterToNauticalMile
}