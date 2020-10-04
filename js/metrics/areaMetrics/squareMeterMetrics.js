function squaremeterToSquarekilometer(number){
    return number / 1000000
}

function squaremeterToSquaremile(number){
    return (number / 2590000).toFixed(10)
}

function squaremeterToSquareyard(number){
    return number * 1.196
}

function squaremeterToSquarefoot(number){
    return number * 10.764
}

function squaremeterToSquareinch(number){
    return number * 1550
}

function squaremeterToHectare(number){
    return number / 10000
}

function squaremeterToAcre(number){
    return (number / 4047).toFixed(7)
}

export default {
    squaremeterToSquarekilometer,
    squaremeterToSquaremile,
    squaremeterToSquareyard,
    squaremeterToSquarefoot,
    squaremeterToSquareinch,
    squaremeterToHectare,
    squaremeterToAcre
}