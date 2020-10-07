function degreeToGrado(number){
    return (number * (200 / 180)).toFixed(3)
}

function degreeToThousandangular(number){
    return (number * ((1000*Math.PI)/180)).toFixed(3)
}

function degreeToArcminute(number){
    return number * 60
}

function degreeToRadian(number){
    return (number * (Math.PI / 180)).toFixed(5)
}

function degreeToArcsecond(number){
    return number * 3600
}

export default {
    degreeToGrado,
    degreeToThousandangular,
    degreeToArcminute,
    degreeToRadian,
    degreeToArcsecond
}