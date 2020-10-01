function secondToMinute(number){
    return number / 60
}

function secondToHour(number){
    return (number / 3600).toFixed(9)
}

function secondToDay(number){
    return (number / 86400).toExponential()
}

function secondToWeek(number){
    return (number / 604800).toExponential()
}

function secondToMonth(number){
    return (number / 2628000000).toExponential()
}

function secondToYear(number){
    return (number / 31540000).toExponential()
}

function secondToDecade(number){
    return (number / 315400000).toExponential()
}

function secondToCentury(number){
    return (number / 3154000000).toExponential()
}

export default {
    secondToMinute,
    secondToHour,
    secondToDay,
    secondToWeek,
    secondToMonth,
    secondToYear,
    secondToDecade,
    secondToCentury
}