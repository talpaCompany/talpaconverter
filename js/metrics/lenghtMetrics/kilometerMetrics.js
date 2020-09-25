function kilometerToMeter(number){
    return number * 1000
}

function kilometerToCentimeter(number){
    return number * 100000
}

function kilometerToMillimeter(number){
    return number * 1000000
}

function kilometerToMicrometer(number){
    return number * 1000000000
}

function kilometerToNanometer(number){
    return number * 1000000000000
}

function kilometerToMile(number){
    return (number / 1.609).toFixed(3)
}

function kilometerToYard(number){
    return number * 1094
}

function kilometerToFeet(number){
    return number * 3281
}

function kilometerToInch(number){
    return number * 39370
}

function kilometerToNauticalmile(number){
    return (number / 1.852).toFixed(6)
}

export default {
    kilometerToMeter, 
    kilometerToCentimeter, 
    kilometerToMillimeter, 
    kilometerToMicrometer, 
    kilometerToNanometer,
    kilometerToMile, 
    kilometerToYard, 
    kilometerToFeet, 
    kilometerToInch, 
    kilometerToNauticalmile
}