function yearToSecond(number){
    return (number * 31540000).toExponential()
}

function yearToMinute(number){
    return number * 525600
}

function yearToHour(number){
    return number * 8760
}

function yearToDay(number){
    return number * 365
}

function yearToWeek(number){
    return number * 52.143
}

function yearToMonth(number){
    return number * 12
}

function yearToDecade(number){
    return number / 10
}

function yearToCentury(number){
    return number / 100
}

export default {
    yearToSecond,
    yearToMinute,
    yearToHour,
    yearToDay,
    yearToWeek,
    yearToMonth,
    yearToDecade,
    yearToCentury
}