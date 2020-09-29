function torrToAtm(number){
    return (number / 760).toFixed(8)
}

function torrToBar(number){
    return (number / 750).toFixed(8)
}

function torrToPascal(number){
    return number * 133
}

function torrToPsi(number){
    return (number / 51.715).toFixed(7)
}

export default {
    torrToAtm,
    torrToBar,
    torrToPascal,
    torrToPsi
}