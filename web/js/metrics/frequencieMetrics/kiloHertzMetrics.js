function kiloHertzToHertz(number){
    return number * 1000
}

function kiloHertzToMegaHertz(number){
    return number / 1000
}

function kiloHertzToGigaHertz(number){
    return number / 100000
}

export default {
    kiloHertzToHertz,
    kiloHertzToMegaHertz,
    kiloHertzToGigaHertz
}