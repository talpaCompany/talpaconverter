function kilowatthourToJoule(number){
    return number * 36000000
}

function kilowatthourToKilojoule(number){
    return number * 3600
}

function kilowatthourToGramcalorie(number){
    return number * 860421
}

function kilowatthourToKilocalorie(number){
    return number * 860
}

function kilowatthourToWatthour(number){
    return number * 1000
}

function kilowatthourToEletronVolt(number){
    //Formula??
}

function kilowatthourToBtu(number){
    return number * 3412
}

function kilowatthourToTherm(number){
    return (number / 29.3).toFixed(7)
}

function kilowatthourToFootpoundforce(number){
    return number * 2655000000
}

export default {
    kilowatthourToJoule,
    kilowatthourToKilojoule,
    kilowatthourToGramcalorie,
    kilowatthourToKilocalorie,
    kilowatthourToWatthour,
    // kilowatthourToEletronVolt,
    kilowatthourToBtu,
    kilowatthourToTherm,
    kilowatthourToFootpoundforce
}