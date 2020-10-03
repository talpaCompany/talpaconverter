function decadeToSecond(number){
    return (number * 315400000).toExponential()
}

function decadeToMinute(number){
    return (number * 5256000).toExponential()
}

function decadeToHour(number){
    return number * 87600
}

function decadeToDay(number){
    return number * 3650
}

function decadeToWeek(number){
    return number * 521
}

function decadeToMonth(number){
    return number * 120
}

function decadeToYear(number){
    return number * 10
}

function decadeToCentury(number){
    return number / 10
}

export default {
    decadeToSecond,
    decadeToMinute,
    decadeToHour,
    decadeToDay,
    decadeToWeek,
    decadeToMonth,
    decadeToYear,
    decadeToCentury
}