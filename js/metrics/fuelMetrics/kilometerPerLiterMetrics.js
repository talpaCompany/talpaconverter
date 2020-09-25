function kmperliterToAmericangallon(number){
    return number * 2.352
}

function kmperliterToImperialgallon(number){
    return number * 2.825
}

function kmperliterToLiterper100km(number){
    return 100 / number
}

export default {
    kmperliterToAmericangallon, 
    kmperliterToImperialgallon,
    kmperliterToLiterper100km
}