function squareyardToSquarekilometer(number){
    return (number / 1196000).toExponential()
}

function squareyardToSquaremeter(number){
    return (number / 1.196).toFixed(6)
}

function squareyardToSquaremile(number){
    return (number / 3098000).toExponential()
}

function squareyardToSquarefoot(number){
    return number * 9
}

function squareyardToSquareinch(number){
    return number * 1296
}

function squareyardToHectare(number){
    return (number / 11960).toExponential()
}

function squareyardToAcre(number){
    return (number / 4840).toFixed(9)
}

export default {
    squareyardToSquarekilometer,
    squareyardToSquaremeter,
    squareyardToSquaremile,
    squareyardToSquarefoot,
    squareyardToSquareinch,
    squareyardToHectare,
    squareyardToAcre
}