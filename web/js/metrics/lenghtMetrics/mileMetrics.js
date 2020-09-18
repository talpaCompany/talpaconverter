function mileToKilometer(number){
    return number * 1.609
}

function mileToMeter(number){
    return number * 1609
}

function mileToCentimeter(number){
    return number * 160934
}

function mileToMillimeter(number){
    return number * 1609000000
}

function mileToMicrometer(number){
    return number * 1609000000000
}

function mileToNanometer(number){
    return number * 1609000000000000
}

function mileToYard(number){
    return number * 1760
}

function mileToFeet(number){
    return number * 5280
}

function mileToInch(number){
    return number * 63360
}

function mileToNauticalMile(number){
    return (number / 1.151).toFixed(6)
}

export{mileToKilometer, mileToMeter, mileToCentimeter, mileToMillimeter, mileToMicrometer,
    mileToNanometer, mileToYard, mileToFeet, mileToInch, mileToNauticalMile}