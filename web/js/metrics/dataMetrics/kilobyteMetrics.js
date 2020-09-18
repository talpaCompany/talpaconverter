function kilobyteToByte(number){
    return number * 1000
}

function kilobyteToMegabyte(number){
    return number / 1000
}

function kilobyteToGigabyte(number){
    return number / 1000000
}

function kilobyteToTerabyte(number){
    number / 1000000000
}

function kilobyteToPetabyte(number){
    return number / 1000000000000
}

export{kilobyteToByte, kilobyteToMegabyte, kilobyteToGigabyte, kilobyteToTerabyte, kilobyteToPetabyte}