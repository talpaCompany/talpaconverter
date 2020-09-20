import * as joule from './jouleMetrics.js'
import * as kilojoule from './kilojouleMetrics.js'
import * as gramcalorie from './gramcalorieMetrics.js'

group.energy = "energy"

types.energy = {
    joule : ["joule", "J"],
    kilojoule : ["kilojoule", "KJ"],
    gramcalorie : ["gramcalorie", "gCal"]
}

export default {
    ...joule.default,
    ...kilojoule.default,
    ...gramcalorie.default
}