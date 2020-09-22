function footPoundForceToJoule(number){
    return number * 1.356
}

function footPoundForceToKilojoule(number){
    return (number / 738).toFixed(8)
}

function footPoundForceToGramcalorie(number){
    return (number / 3.086).toFixed(6)
}

function footPoundForceToKilocalorie(number){
    return (number / 3086).toFixed(9)
}

function footPoundForceToWattHour(number){
    return (number / 2655).toFixed(9)
}

function footPoundForceToKilowattHour(number){
    return number / 2655000000
}

function footPoundForceToEletronVolt(number){
    //Formula??
}

function footPoundForceToBTU(number){
    return (number / 778).toFixed(8)
}

function footPoundForceToTherm(number){
    return number / 7780000000
}

export default {
    footPoundForceToJoule,
    footPoundForceToKilojoule,
    footPoundForceToGramcalorie,
    footPoundForceToKilocalorie,
    footPoundForceToKilocalorie,
    footPoundForceToWattHour,
    footPoundForceToKilowattHour,
    footPoundForceToEletronVolt,
    footPoundForceToBTU,
    footPoundForceToTherm
}