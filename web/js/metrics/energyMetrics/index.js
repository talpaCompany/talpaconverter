import * as joule from './jouleMetrics.js'
import * as kilojoule from './kilojouleMetrics.js'

group.energy = "energy"

types.energy = {
    joule : ["joule", "J"],
    kilojoule : ["kilojoule", "KJ"]
}

export default {
    ...joule.default,
    ...kilojoule.default
}