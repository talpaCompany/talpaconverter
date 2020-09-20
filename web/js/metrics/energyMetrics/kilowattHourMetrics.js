function kilowattToJoule(number){
    return number * 36000000
}

function kilowattHourToKilojoule(number){
    return number * 3600
}

function kilowattHourToGramcalorie(number){
    return number * 860421
}

function kilowattHourToKilocalorie(number){
    return number * 860
}

function kilowattHourToWattHour(number){
    return number * 1000
}

function kilowattHourToEletronVolt(number){
    //Formula??
}

function kilowattHourToBTU(number){
    return number * 3412
}

function kilowattHourToTherm(number){
    return (number / 29.3).toFixed(7)
}

function kilowattHourToFootPoundForce(number){
    return number * 2655000000
}

export default {
    kilowattToJoule,
    kilowattHourToKilojoule,
    kilowattHourToGramcalorie,
    kilowattHourToKilocalorie,
    kilowattHourToWattHour,
    kilowattHourToEletronVolt,
    kilowattHourToBTU,
    kilowattHourToTherm,
    kilowattHourToFootPoundForce
}