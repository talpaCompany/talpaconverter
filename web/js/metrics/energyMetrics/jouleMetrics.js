function jouleToKilojoule(number){
    return number / 1000
}

function jouleToGramcalorie(number){
    return (number / 4.184).toFixed(6)
}

function jouleToKilocalorie(number){
    return (number / 4184).toFixed(9)
}

function jouleToWattHour(number){
    return (number / 3600).toFixed(9)
}

function jouleToKilowattHour(number){
    return number / 36000000
}

function jouleToEletronVolt(number){
    return number * 6242000000000000000000
}

function jouleToBTU(number){
    return (number / 1055).toFixed(9)
}

function jouleToTherm(number){
    return number / 105500000000
}

function jouleToFootPoundForce(number){
    return (number / 1.356).toFixed(6)
}

export default {jouleToKilojoule, jouleToGramcalorie, jouleToKilocalorie, jouleToWattHour,
    jouleToKilowattHour, jouleToEletronVolt, jouleToBTU, jouleToTherm, jouleToFootPoundForce}