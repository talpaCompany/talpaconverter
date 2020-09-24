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

function thermToWatthour(number){
    return number * 29300
}

function thermToKilowatthour(number){
    return number * 29.3
}

function thermToEletronVolt(number){
    //Formula??
}

function thermToBtu(number){
    return number * 99976
}

function thermToFootpoundforce(number){
    return number * 7780000000
}

export default {
    thermToJoule,
    thermToKilojoule,
    thermToGramcalorie,
    thermToKilocalorie,
    thermToWatthour,
    thermToKilowatthour,
    // thermToEletronVolt,
    thermToBtu,
    thermToFootpoundforce
}