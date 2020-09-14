function kilobitToBit(number){
    return number * 1000
}

function kilobitToMegabit(number){
    return number / 1000
}

function kilobitToGigabit(number){
    return number / 1000000
}

function kilobitToTerabit(number){
    return number / 1000000000
}

function kilobitToPetabit(number){
    return number / 1000000000000
}

function kilobitToByte(number){
    return number * 125
}

function kilobitToKilobyte(number){
    return number / 8
}

function kilobitToQuiloocteto(number){
    return (number / 8.192).toFixed(5)
}

kilobitToQuiloocteto(1)