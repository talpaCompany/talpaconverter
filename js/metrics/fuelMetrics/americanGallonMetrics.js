function americangallonToImperialgallon(number){
    return number * 1.201
}

function americangallonToKmperliter(number){
    return number / 2.352
}

function americangallonToLiterper100km(number){
    return 235.215 / number
}

export default {
    americangallonToImperialgallon, 
    americangallonToKmperliter,
    americangallonToLiterper100km
}