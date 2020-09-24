function kilojouleToJoule(number){
    return number * 1000
}

function kilojouleToGramcalorie(number){
    return number * 239
}

function kilojouleToKilocalorie(number){
    return (number / 4.184).toFixed(6)
}

function kilojouleToWatthour(number){
    return (number / 3.6).toFixed(6)
}

function kilojouleToKilowatthour(number){
    return (number / 3600).toFixed(9)
}

function kilojouleToEletronVolt(number){
    return (number * 9.223e+18)
}

function kilojouleToBtu(number){
    return (number / 1.055).toFixed(6)
}

function kilojouleToTherm(number){
    return (number / 105480).toExponential()
}

function kilojouleToFootpoundforce(number){
    return number * 738
}

export default {
    kilojouleToJoule,
    kilojouleToGramcalorie,
    kilojouleToKilocalorie,
    kilojouleToWatthour,
    kilojouleToKilowatthour,
    kilojouleToEletronVolt,
    kilojouleToBtu,
    kilojouleToTherm,
    kilojouleToFootpoundforce
}