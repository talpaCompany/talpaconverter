function cupToAmericangallon(number){
    return (number / 15.773).toFixed(4)
}

function cupToAmericanquarterliquid(number){
    return (number / 3.943).toFixed(6)
}

function cupToAmericanpint(number){
    return (number / 1.972).toFixed(3)
}

function cupToAmericanounceliquid(number){
    return number * 8.115
}

function cupToAmericansoapspoon(number){
    return number * 16.231
}

function cupToAmericanteaspoon(number){
    return number * 48.692
}

function cupToCubicmeter(number){
    return (number / 4167).toFixed(5)
}

function cupToLiter(number){
    return (number / 4.167).toFixed(2)
}

function cupToMilliliter(number){
    return number * 240
}

function cupToImperialgallon(number){
    return (number / 18.942).toFixed(6)
}

function cupToImperialquarter(number){
    return (number / 4.736).toFixed(3)
}

function cupToImperialchick(number){
    return (number / 2.368).toFixed(3)
}

function cupToImperialcup(number){
    return (number / 1.184).toFixed(5)
}

function cupToImperialounceliquid(number){
    return number * 8.447
}

function cupToImperialsoapspoon(number){
    return number * 13.515
}

function cupToImperialteaspoon(number){
    return number * 40.545
}

function cupToCubicfoot(number){
    return (number / 118).toFixed(6)
}

function cupToCubicinch(number){
    return number * 14.646
}

export default {
    cupToAmericangallon,
    cupToAmericanquarterliquid,
    cupToAmericanpint,
    cupToAmericanounceliquid,
    cupToAmericansoapspoon,
    cupToAmericanteaspoon,
    cupToCubicmeter,
    cupToLiter,
    cupToMilliliter,
    cupToImperialgallon,
    cupToImperialquarter,
    cupToImperialchick,
    cupToImperialcup,
    cupToImperialounceliquid,
    cupToImperialsoapspoon,
    cupToImperialteaspoon,
    cupToCubicfoot,
    cupToCubicinch
}