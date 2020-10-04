function squarekilometerToSquaremeter(number){
    return number * 1000000
}

function squarekilometerToSquaremile(number){
    return (number / 2.59).toFixed(6)
}

function squarekilometerToSquareyard(number){
    return number * 1196000000
}

function squarekilometerToSquarefoot(number){
    return number * 10760000000
}

function squarekilometerToSquareinch(number){
    return number * 155000000000
}

function squarekilometerToHectare(number){
    return number * 100
}

function squarekilometerToAcre(number){
    return number * 247
}

export default {
    squarekilometerToSquaremeter,
    squarekilometerToSquaremile,
    squarekilometerToSquareyard,
    squarekilometerToSquarefoot,
    squarekilometerToSquareinch,
    squarekilometerToHectare,
    squarekilometerToAcre
}