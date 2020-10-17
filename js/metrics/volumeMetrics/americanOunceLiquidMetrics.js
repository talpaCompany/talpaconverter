function americanounceliquidToAmericangallon(number){
    return (number / 128).toFixed(4)
}

function americanounceliquidToAmericanquarteliquid(number){
    return (number / 32).toFixed(3)
}

function americanounceliquidToAmericanpint(number){
    return (number / 16).toFixed(4)
}

function americanounceliquidToCup(number){
    return (number / 8.115).toFixed(3)
}

function americanounceliquidToAmericansoapspoon(number){
    return number * 2
}

function americanounceliquidAmericanteaspoon(number){
    return number * 6
}

function americanounceliquidToCubicmeter(number){
    return (number / 33814).toExponential()
}

function americanounceliquidToLiter(number){
    return (number / 33.814).toFixed(7)
}

function americanounceliquidToMilliliter(number){
    return number * 29.574
}

function americanounceliquidToImperialgallon(number){
    return (number / 154).toFixed(4)
}

function americanounceliquidToImperialquarter(number){
    return (number / 38.43).toFixed(3)
}

function americanounceliquidToImperialchick(number){
    return (number / 19.215).toFixed(3)
}

function americanouceliquidToImperialcup(number){
    return (number / 9.608).toFixed(3)
}

function americanounceliquidToImperialounceliquid(number){
    return number * 1.041
}

function americanounceliquidToImperialsoapspoon(number){
    return number * 1.665
}

function americanounceliquidToImperialteaapoon(number){
    return number * 4.996
}

function americanounceliquidToCubicfoot(number){
    return (number / 958).toFixed(4)
}

function americanounceliquidToCubicinch(number){
    return number * 1.805
}

export default {
    americanounceliquidToAmericangallon,
    americanounceliquidToAmericanquarteliquid,
    americanounceliquidToAmericanpint,
    americanounceliquidToCup,
    americanounceliquidToAmericansoapspoon,
    americanounceliquidAmericanteaspoon,
    americanounceliquidToCubicmeter,
    americanounceliquidToLiter,
    americanounceliquidToMilliliter,
    americanounceliquidToImperialgallon,
    americanounceliquidToImperialquarter,
    americanounceliquidToImperialchick,
    americanouceliquidToImperialcup,
    americanounceliquidToImperialounceliquid,
    americanounceliquidToImperialsoapspoon,
    americanounceliquidToImperialteaapoon,
    americanounceliquidToCubicfoot,
    americanounceliquidToCubicinch
}