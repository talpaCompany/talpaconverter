function megabyteToByte(number){
    return number * 1000000
}

function megabyteToKilobyte(number){
    return number * 1000
}

function megabyteToGigabyte(number){
    return number / 1000
}

function megabyteToTerabyte(number){
    return number / 1000000
}

function megabyteToPetabyte(number){
    return number / 1000000000
}

export default {
    megabyteToByte, 
    megabyteToKilobyte, 
    megabyteToGigabyte, 
    megabyteToTerabyte, 
    megabyteToPetabyte
}