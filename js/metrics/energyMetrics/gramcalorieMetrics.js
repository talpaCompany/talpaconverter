function gramcalorieToJoule(number){
    return number * 4.184
}

function gramcalorieToKilojoule(number){
    return (number / 239).toFixed(6)
}

function gramcalorieToKilocalorie(number){
    return number / 1000
}

function gramcalorieToWatthour(number){
    return (number / 860).toFixed(6)
}

function gramcalorieToKilowatthour(number){
    return (number / 860421).toExponential()
}

function gramcalorieToEletronVolt(number){
    //Formula??
}

function gramcalorieToBtu(number){
    return (number / 252).toFixed(8)
}

function gramcalorieToTherm(number){
    return number / 25210000000
}

function gramcalorieToFootpoundforce(number){
    return number * 3.086
}

export default {
    gramcalorieToJoule,
    gramcalorieToKilojoule,
    gramcalorieToKilocalorie,
    gramcalorieToWatthour,
    gramcalorieToKilowatthour,
    // gramcalorieToEletronVolt,
    gramcalorieToBtu,
    gramcalorieToTherm,
    gramcalorieToFootpoundforce
}   