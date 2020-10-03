function monthToSecond(number){
    return (number * 2628000).toExponential()
}

function monthToMinute(number){
    return number * 43800
}

function monthToHour(number){
    return number * 730
}

function monthToDay(number){
    return number * 30.417
}

function monthToWeek(number){
    return number * 4.345
}

function monthToYear(number){
    return (number / 12).toFixed(6)
}

function monthToDecade(number){
    return (number / 120).toFixed(7)
}

function monthToCentury(number){
    return (number / 1200).toFixed(8)
}

export default {
    monthToSecond,
    monthToMinute,
    monthToHour,
    monthToDay,
    monthToWeek,
    monthToYear,
    monthToDecade,
    monthToCentury
}