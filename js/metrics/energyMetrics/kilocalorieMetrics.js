function kilocalorieToJoule(number){
    return number * 4184
}

function kilocalorieToKilojoule(number){
    return number * 4.184
}

function kilocalorieToGramcalorie(number){
    return number * 1000
}

function kilocalorieToWattHour(number){
    return number * 1.162
}

function kilocalorieToKilowattHour(number){
    return (number / 860).toFixed(8)
}

function kilocalorieToEletronVolt(number){
    //Formula
}

function kilocalorieToBTU(number){
    return number * 3.966
}

function kilocalorieToTherm(number){
    return (number / 25210).toExponential()
}

function kilocalorieToFootPoundForce(number){
    return number * 3086
}

export default {
    kilocalorieToJoule,
    kilocalorieToKilojoule,
    kilocalorieToGramcalorie,
    kilocalorieToWattHour,
    kilocalorieToKilowattHour,
    kilocalorieToEletronVolt,
    kilocalorieToBTU,
    kilocalorieToTherm,
    kilocalorieToFootPoundForce
}