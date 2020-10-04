function squaremileToSquarekilometer(number){
    return number * 2.59
}

function squaremileToSquaremeter(number){
    return (number * 2590000).toExponential()
}

function squaremileToSquareyard(number){
    return (number * 3098000).toExponential()
}

function squaremileToSquarefoot(number){
    return (number * 27880000).toExponential()
}

function squaremileToSquareinch(number){
    return (number * 4014000000).toExponential()
}

function squaremileToHectare(number){
    return number * 259
}

function squaremileToAcre(number){
    return number * 640
}

export default {
    squaremileToSquarekilometer,
    squaremileToSquaremeter,
    squaremileToSquareyard,
    squaremileToSquarefoot,
    squaremileToSquareinch,
    squaremileToHectare,
    squaremileToAcre
}