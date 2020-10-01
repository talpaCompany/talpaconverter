function minuteToSecond(number){
    return number * 60
}

function minuteToHour(number){
    return (number / 60).toFixed(7)
}

function minuteToDay(number){
    return (number / 1440).toFixed(9)
}

function minuteToWeek(number){
    return (number / 10080).toExponential()
}

function minuteToMonth(number){
    return (number / 43800).toExponential()
}

function minuteToYear(number){
    return (number / 525600).toExponential()
}

function minuteToDecade(number){
    return (number / 5256000).toExponential()
}

function minuteToCentury(number){
    return (number / 52560000).toExponential()
}

export default {
    minuteToSecond,
    minuteToHour,
    minuteToDay,
    minuteToWeek,
    minuteToMonth,
    minuteToYear,
    minuteToDecade,
    minuteToCentury
}