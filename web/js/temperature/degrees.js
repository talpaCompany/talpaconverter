function kelvinToCelsius(degrees) {
    return (degrees - 273.15).toFixed(2) 
}

function celsiusToKelvin(degrees){
    return (degrees + 273.15).toFixed(2)
}

function celsiusToFahrenheit(degrees){
    return ((degrees * 1.8) + 32).toFixed(2)
}

function fahrenheitToCelsius(degrees){
    return ((degrees - 32) / 1.8).toFixed(2)
}

function kelvinToFahrenheit(degrees){
    return (((degrees - 273.15) * 1.8) + 32).toFixed(2)
}

function fahrenheitToKelvin(degrees){
    return (((degrees - 32) * 0.55) + 273.15).toFixed(2)
}

group.temperature = "temperature"

types.temperature = {
    celsius = ["celsius", "ºC"],
    kelvin = ["kelvin", "ºK"],
    fahrenheit = ["fahrenheit", "ºF"]
}

export default {
    kelvinToCelsius, 
    celsiusToKelvin, 
    celsiusToFahrenheit, 
    fahrenheitToCelsius, 
    kelvinToFahrenheit, 
    fahrenheitToKelvin, 
    group, 
    types
}

