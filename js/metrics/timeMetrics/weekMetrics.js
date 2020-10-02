function weekToSeconds(number){
    return number * 604800
}

function weekToMinute(number){
    return number * 10080
}

function weekToHour(number){
    return number * 168
}

function weekToDay(number){
    return number * 7
}

function weekToMonth(number){
    return (number / 4.345).toFixed(6)
}

function weekToYear(number){
    return (number / 52.143).toFixed(7)
}

function weekToDecade(number){
    return (number / 521).toFixed(8)
}

function weekToCentury(number){
    return (number / 5214).toFixed(9)
}

export default {
    weekToSeconds,
    weekToMinute,
    weekToHour,
    weekToDay,
    weekToMonth,
    weekToYear,
    weekToDecade,
    weekToCentury
}