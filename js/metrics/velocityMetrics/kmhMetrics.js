function kmhToMph(number){
    return (number / 1.609).toFixed(6)
}

function kmhToFps(number){
    return (number / 1.097).toFixed(6)
}

function kmhToMs(number){
    return (number / 3.6).toFixed(6)
}

function kmhToNo(number){
    return (number / 1.852).toFixed(6)
}

export default {
    kmhToMph,
    kmhToFps,
    kmhToMs,
    kmhToNo
}