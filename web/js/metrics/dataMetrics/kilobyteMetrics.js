function kilobyteToByte(number){
    return number * 1000
}

function kilobyteToQuiloocteto(number){
    return (number / 1024).toFixed(8)
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
    console.log(number / 1000000000000)
}

kilobyteToPetabyte(1)