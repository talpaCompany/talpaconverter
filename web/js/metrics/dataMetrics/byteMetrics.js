function byteToKilobyte(number){
    return number / 1000
}

function byteToQuiloocteto(number){
    return (number / 1024).toFixed(8)
}

function byteToMegabyte(number){
    return number / 1000000
}

function byteToGigabyte(number){
    return number / 1000000000
}

function byteToTerabyte(number){
    return number / 1000000000000
}

function byteToPetabyte(number){
    console.log(number / 1000000000000000)
}

byteToPetabyte(1)