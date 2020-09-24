function footpoundforceToJoule(number){
    return number * 1.356
}

function footpoundforceToKilojoule(number){
    return (number / 738).toFixed(8)
}

function footpoundforceToGramcalorie(number){
    return (number / 3.086).toFixed(6)
}

function footpoundforceToKilocalorie(number){
    return (number / 3086).toFixed(9)
}

function footpoundforceToWatthour(number){
    return (number / 2655).toFixed(9)
}

function footpoundforceToKilowatthour(number){
    return number / 2655000000
}

function footpoundforceToEletronVolt(number){
    //Formula??
}

function footpoundforceToBtu(number){
    return (number / 778).toFixed(8)
}

function footpoundforceToTherm(number){
    return number / 7780000000
}

export default {
    footpoundforceToJoule,
    footpoundforceToKilojoule,
    footpoundforceToGramcalorie,
    footpoundforceToKilocalorie,
    footpoundforceToKilocalorie,
    footpoundforceToWatthour,
    footpoundforceToKilowatthour,
    // footpoundforceToEletronVolt,
    footpoundforceToBtu,
    footpoundforceToTherm
}