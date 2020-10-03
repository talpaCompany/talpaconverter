function noToMph(number){
    return number * 1.151
}

function noToFps(number){
    return number * 1.688
}

function noToMs(number){
    return (number / 1.944).toFixed(6)
}

function noToKmh(number){
    return number * 1.852
}

export default {
    noToMph,
    noToFps,
    noToMs,
    noToKmh
}