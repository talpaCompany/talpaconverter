function dayToSecond(number){ 
    return number * 86400
}

function dayToMinute(number){
    return number * 1440
}

function dayToHour(number){
    return number * 24
}

function dayToWeek(number){
    return (number / 7).toFixed(6)
}

function dayToMonth(number){
    return (number / 30.417).toFixed(7)
}

function dayToYear(number){
    return (number / 365).toFixed(8)
}

function dayToDecade(number){
    return (number / 3650).toFixed(9)
}

function dayToCentury(number){
    return (number / 36500).toExponential()
}

export default {
    dayToSecond,
    dayToMinute,
    dayToHour,
    dayToWeek,
    dayToMonth,
    dayToYear,
    dayToDecade,
    dayToCentury
}