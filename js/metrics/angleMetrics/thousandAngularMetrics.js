function thousandangularToGrado(number){
    return number * (200 / (1000 * Math.PI)).toFixed(6)
}

function thousandangularToDegree(number){
    return number * (180 / (1000 * Math.PI)).toFixed(7)
}

function thousandangularToArcminute(number){
    return number * ((60 * 180) / (1000 * Math.PI)).toFixed(5)
}

function thousandangularToRadian(number){
    return number / 1000
}

function thousandangularToArcsecond(number){
    return number * ((3600 * 180) / (1000 * Math.PI)).toFixed(3)
}

export default {
    thousandangularToGrado,
    thousandangularToDegree,
    thousandangularToArcminute,
    thousandangularToRadian,
    thousandangularToArcsecond
}