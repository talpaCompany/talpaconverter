function btuToJoule(number){
    return number * 1055
}

function btuToKilojoule(number){
    return number * 1.055
}

function btuToGramcalorie(number){
    return number * 252
}

function btuToKilocalorie(number){
    return (number / 3.966).toFixed(6)
}

function btuToWatthour(number){
    return (number / 3.412).toFixed(6)
}

function btuToKilowatthour(number){
    return (number / 3412).toFixed(9)
}

function btuToEletronVolt(number){
    //Formula??
}

function btuToTherm(number){
    return (number / 99976).toExponential()
}

function btuToFootpoundforce(number){
    return number * 778
}

export default {
    btuToJoule,
    btuToKilojoule,
    btuToGramcalorie,
    btuToKilocalorie,
    btuToWatthour,
    btuToKilowatthour,
    btuToEletronVolt,
    btuToTherm,
    btuToFootpoundforce
}