function hourToSecond(number){
    return number * 3600
}

function hourToMinute(number){
    return number * 60
}

function hourToDay(number){
    return (number / 24).toFixed(7)
}

function hourToWeek(number){
    return (number / 168).toFixed(8)
}

function hourToMonth(number){
    return (number / 730).toFixed(8)
}

function hourToYear(number){
    return (number / 8760).toFixed(9)
}

function hourToDecade(number){
    return (number / 87600).toExponential()
}

function hourToCentury(number){
    return (number / 876000).toExponential()
}

export default {
    hourToSecond,
    hourToMinute,
    hourToDay,
    hourToWeek,
    hourToMonth,
    hourToYear,
    hourToDecade,
    hourToCentury
}