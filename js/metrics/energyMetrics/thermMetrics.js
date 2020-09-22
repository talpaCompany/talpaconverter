function thermToJoule(number){
    return number * 105500000000
}

function thermToKilojoule(number){
    return number * 105480
}

function thermToGramcalorie(number){
    return number * 25210000000
}

function thermToKilocalorie(number){
    return number * 25210
}

function thermToWattHour(number){
    return number * 29300
}

function thermToKilowattHour(number){
    return number * 29.3
}

function thermToEletronVolt(number){
    //Formula??
}

function thermToBTU(number){
    return number * 99976
}

function thermToFootPoundForce(number){
    return number * 7780000000
}

export default {
    thermToJoule,
    thermToKilojoule,
    thermToGramcalorie,
    thermToKilocalorie,
    thermToWattHour,
    thermToKilowattHour,
    thermToEletronVolt,
    thermToBTU,
    thermToFootPoundForce
}