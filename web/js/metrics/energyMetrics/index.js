import * as joule from './jouleMetrics.js'
import * as kilojoule from './kilojouleMetrics.js'
import * as gramcalorie from './gramcalorieMetrics.js'
import * as kilocalorie from './kilocalorieMetrics.js'
import * as wattHour from './wattHourMetrics.js'
import * as kilowattHour from './kilowattHourMetrics.js'

group.energy = "energy"

types.energy = {
    joule : ["joule", "J"],
    kilojoule : ["kilojoule", "KJ"],
    gramcalorie : ["gramcalorie", "gCal"],
    kilocalorie : ["kilocalorie", "kCal"],
    wattHour : ["wattHour", "Wh"],
    kilowattHour : ["kilowattHour", "kWh"]
}

export default {
    ...joule.default,
    ...kilojoule.default,
    ...gramcalorie.default,
    ...kilocalorie.default,
    ...wattHour.default,
    ...kilowattHour.default
}