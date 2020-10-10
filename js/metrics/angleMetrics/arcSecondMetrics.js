function arcsecondToGrado(number){
    return (number / 3240).toFixed(9)
}

function arcsecondToDegree(number){
    return (number / 3600).toFixed(9)
}

function arcsecondToThousandangular(number){
    return ((number * (Math.PI * 1000)) / (180 * 3600)).toFixed(8)
}

function arcsecondToArcminute(number){
    return (number / 60).toFixed(7)
}

function arcsecondToRadian(number){
    return ((number * Math.PI / (180 * 3600)).toExponential())
}

export default {
    arcsecondToGrado,
    arcsecondToDegree,
    arcsecondToThousandangular,
    arcsecondToArcminute,
    arcsecondToRadian
}