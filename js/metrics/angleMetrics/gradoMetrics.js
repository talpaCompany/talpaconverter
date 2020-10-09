function gradoToDegree(number){
    return (number * (180/200))
}

function gradoToThousandangular(number){
    return (number * ((1000 * Math.PI) / 200)).toFixed(3)
}

function gradoToArcminute(number){
    return number * 54
}

function gradoToRadian(number){
    return number * (Math.PI / 200).toFixed(5)
}

function gradoToArcsecond(number){
    return number * 3240
}

export default {
    gradoToDegree,
    gradoToThousandangular,
    gradoToArcminute,
    gradoToRadian,
    gradoToArcsecond
}