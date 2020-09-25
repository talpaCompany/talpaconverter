function meterToKilometer(number){
    return number / 1000
}

function meterToCentimeter(number){
    return number * 100
}

function meterToMillimeter(number){
    return number * 1000
}

function meterToMicrometer(number){
    return number * 1000000
}

function meterToNanometer(number){
    return number * 1000000000
}

function meterToMile(number){
    return (number / 1609).toFixed(7)
}

function meterToYard(number){
    return number * 1.094  
}

function meterToFeet(number){
    return number * 3.281
}

function meterToInch(number){
    return number * 39.37
}

function meterToNauticalmile(number){
    return (number / 1852).toFixed(7)
}

export default {
    meterToKilometer, 
    meterToCentimeter, 
    meterToMillimeter, 
    meterToMicrometer, 
    meterToNanometer,
    meterToMile, 
    meterToYard, 
    meterToFeet, 
    meterToInch, 
    meterToNauticalmile
}