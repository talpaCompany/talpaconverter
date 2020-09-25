function imperialgallonToAmericangallon(number){
    return (number / 1.201).toFixed(6)
}

function imperialgallonToKmperliter(number){
    return (number / 2.825).toFixed(6)
}

function imperialgallonToLiterper100km(number){
    return 282.481 / number
}

export default {
    imperialgallonToAmericangallon, 
    imperialgallonToKmperliter,
    imperialgallonToLiterper100km
}