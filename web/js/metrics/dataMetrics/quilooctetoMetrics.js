function quilooctetoToByte(number){
    return number * 1024
}

function quilooctetoToKilobyte(number){
    return number * 1.024
}

function quilooctetoToMegabyte(number){
    return (number / 977).toFixed(6)
}

function quilooctetoToGigabyte(number){
    return (number / 976562).toExponential()
}

function quilooctetoToTerabyte(number){
    console.log(Math.(number / 9.76600000000)) // rever
}

quilooctetoToTerabyte(1)