function fpsToMph(number){
    return (number / 1.467).toFixed(6)
}

function fpsToMs(number){
    return (number / 3.281).toFixed(4)
}

function fpsToKmh(number){
    return number * 1.097
}

function fpsToNo(number){
    return (number / 1.688).toFixed(3)
}

export default {
    fpsToMph,
    fpsToMs,
    fpsToKmh,
    fpsToNo
}