function radianToGrado(number){
    return number * (200 / Math.PI).toFixed(3)
}

function radianToDegree(number){
    return number * (180 / Math.PI).toFixed(4)
}

function radianToThousandangular(number){
    return number * 1000
}

function radianToArcminute(number){
    return number * ((60 * 180) / Math.PI).toFixed(2)
}

function radianToArcsecond(number){
    return number * ((3600 * 180) / Math.PI).toFixed(0)
}

export default {
    radianToGrado,
    radianToDegree,
    radianToThousandangular,
    radianToArcminute,
    radianToArcsecond
}