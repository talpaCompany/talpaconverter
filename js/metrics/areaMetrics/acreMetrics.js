function acreToSquarekilometer(number){
    return (number / 247).toFixed(8)
}

function acreToSquaremeter(number){
    return number * 4047
}

function acreToSquaremile(number){
    return (number / 640).toFixed(7)
}

function acreToSquareyard(number){
    return number * 4840
}

function acreToSquarefoot(number){
    return number * 43560
}

function acreToSquareinch(number){
    return (number * 6273000).toExponential()
}

function acreToHectare(number){
    return (number / 2.471).toFixed(6)
}

export default {
    acreToSquarekilometer,
    acreToSquaremeter,
    acreToSquaremile,
    acreToSquareyard,
    acreToSquarefoot,
    acreToSquareinch,
    acreToHectare
}