function squarefootToSquarekilometer(number){
    return (number / 10760000).toExponential()
}

function squarefootToSquaremeter(number){
    return (number / 10.764).toFixed(6)
}

function squarefootToSquaremile(number){
    return (number / 27880000).toExponential()
}

function squarefootToSquareyard(number){
    return (number / 9).toFixed(6)
}

function squarefootToSquareinch(number){
    return number * 144
}

function squarefootToHectare(number){
    return (number / 107639).toExponential()
}

function squarefootToAcre(number){
    return (number / 43560).toExponential()
}

export default {
    squarefootToSquarekilometer,
    squarefootToSquaremeter,
    squarefootToSquaremile,
    squarefootToSquareyard,
    squarefootToSquareinch,
    squarefootToHectare,
    squarefootToAcre
}