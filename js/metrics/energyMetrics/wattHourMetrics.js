function watthourToJoule(number){
    return number * 3600
}

function watthourToKilojoule(number){
    return number * 3.6
}

function watthourToGramcalorie(number){
    return number * 860
}

function watthourToKilocalorie(number){
    return (number / 1.162).toFixed(6)
}

function watthourToKilowatthour(number){
    return number / 1000
}

function wattHoutToEletronVolt(number){
    //Formula
}

function watthourToBtu(number){
    return number * 3.412
}

function watthourToTherm(number){
    return (number / 29300).toExponential()
}

function watthourToFootpoundforce(number){
    return number * 2655
}

export default {
    watthourToJoule,
    watthourToKilojoule,
    watthourToGramcalorie,
    watthourToKilocalorie,
    watthourToKilowatthour,
    // wattHoutToEletronVolt,
    watthourToBtu,
    watthourToTherm,
    watthourToFootpoundforce
}