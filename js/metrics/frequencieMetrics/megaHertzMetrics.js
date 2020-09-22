function megaHertzToHertz(number){
    return number * 1000000
}

function megaHertzToKiloHertz(number){
    return number * 1000
}

function megaHertzToGigaHertz(number){
    return number / 1000
}

export default {
    megaHertzToHertz,
    megaHertzToKiloHertz,
    megaHertzToGigaHertz
}