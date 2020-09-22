function terabyteToByte(number){
    return number / 1000000000000
}

function terabyteToKilobyte(number){
    return number / 1000000000
}

function terabyteToMegabyte(number){
    return number * 1000000
}

function terabyteToGigabyte(number){
    return number * 1000
}

function terabyteToPetabyte(number){
    return number / 1000
}

export default {
    terabyteToByte, 
    terabyteToKilobyte, 
    terabyteToMegabyte, 
    terabyteToGigabyte, 
    terabyteToPetabyte
}