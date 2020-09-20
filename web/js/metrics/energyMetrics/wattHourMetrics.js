function wattHourToJoule(number){
    return number * 3600
}

function wattHourToKilojoule(number){
    return number * 3.6
}

function wattHourToGramcalorie(number){
    return number * 860
}

function wattHourToKilocalorie(number){
    return (number / 1.162).toFixed(6)
}

function wattHourToKilowattHour(number){
    return number / 1000
}

function wattHoutToEletronVolt(number){
    //Formula
}

function wattHourToBTU(number){
    return number * 3.412
}

function wattHourToTherm(number){
    return (number / 29300).toExponential()
}

function wattHourToFootPoundForce(number){
    return number * 2655
}

export default {
    wattHourToJoule,
    wattHourToKilojoule,
    wattHourToGramcalorie,
    wattHourToKilocalorie,
    wattHourToKilowattHour,
    wattHoutToEletronVolt,
    wattHourToBTU,
    wattHourToTherm,
    wattHourToFootPoundForce
}