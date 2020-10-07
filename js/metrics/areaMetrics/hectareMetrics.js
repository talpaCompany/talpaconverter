function hectareToSquarekilometer(number){
    return number / 100
}

function hectareToSquaremeter(number){
    return number * 10000
}

function hectareToSquaremile(number){
    return (number / 259).toFixed(8)
}

function hectareToSquareyard(number){
    return number * 11960
}

function hectareToSquarefoot(number){
    return number * 107639
}

function hectareToSquareinch(number){
    return (number * 15500000).toExponential()
}

function hectareToAcre(number){
    return number * 2.471
}

export default {
    hectareToSquarekilometer,
    hectareToSquaremeter,
    hectareToSquaremile,
    hectareToSquareyard,
    hectareToSquarefoot,
    hectareToSquareinch,
    hectareToAcre
}