function kilohertzToHertz(number){
    return number * 1000
}

function kilohertzToMegahertz(number){
    return number / 1000
}

function kilohertzToGigahertz(number){
    return number / 100000
}

export default {
    kilohertzToHertz,
    kilohertzToMegahertz,
    kilohertzToGigahertz
}