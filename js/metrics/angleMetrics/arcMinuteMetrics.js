function arcminuteToGrado(number){
    return (number / 54).toFixed(7)
}

function arcminuteToDegree(number){
    return (number / 60).toFixed(7)
}

function arcminuteToThousandangular(number){
    return number * ((1000 * Math.PI) / (60 * 180)).toFixed(6)
}

function arcminuteToRadian(number){
    return number * (Math.PI / (60 * 180)).toFixed(9)
}

function arcminuteToArcsecond(number){
    return number * 60
}

export default {
    arcminuteToGrado,
    arcminuteToDegree,
    arcminuteToThousandangular,
    arcminuteToRadian,
    arcminuteToArcsecond
}