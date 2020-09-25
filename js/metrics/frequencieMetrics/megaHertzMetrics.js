function megahertzToHertz(number){
    return number * 1000000
}

function megahertzToKilohertz(number){
    return number * 1000
}

function megahertzToGigahertz(number){
    return number / 1000
}

export default {
    megahertzToHertz,
    megahertzToKilohertz,
    megahertzToGigahertz
}