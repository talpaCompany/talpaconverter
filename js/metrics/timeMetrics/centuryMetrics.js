function centuryToSecond(number){
    return (number * 3154000000).toExponential()
}

function centuryToMinute(number){
    return (number * 52560000).toExponential()
}

function centuryToHour(number){
    return number * 876000
}

function centuryToDay(number){
    return number * 36500
}

function centuryToWeek(number){
    return number * 5214
}

function centuryToMonth(number){
    return number * 1200
}

function centuryToYear(number){
    return number * 100
}

function centuryToDecade(number){
    return number * 10
}

export default {
    centuryToSecond,
    centuryToMinute,
    centuryToHour,
    centuryToDay,
    centuryToWeek,
    centuryToMonth,
    centuryToYear,
    centuryToDecade
}