function squareinchToSquarekilometer(number){
    return (number / 1550000000).toExponential()
}

function squareinchToSquaremeter(number){
    return (number / 1550).toFixed(8)
}

function squareinchToSquaremile(number){
    return (number / 4014000000).toExponential()
}

function squareinchToSquareyard(number){
    return (number / 1296).toFixed(9)
}

function squareinchToSquarefoot(number){
    return (number / 144).toFixed(8)
}

function squareinchToHectare(number){
    return (number / 15500000).toExponential()
}

function squareinchToAcre(number){
    return (number / 6273000).toExponential()
}

export default {
    squareinchToSquarekilometer,
    squareinchToSquaremeter,
    squareinchToSquaremile,
    squareinchToSquareyard,
    squareinchToSquarefoot,
    squareinchToHectare,
    squareinchToAcre
}