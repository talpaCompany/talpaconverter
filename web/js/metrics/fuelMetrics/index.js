import * as americanGallon from './americanGallonMetrics.js'
import * as imperialGallon from './imperialGallonMetrics.js'
import * as kmPerLiter from './kilometerPerLiterMetrics.js'
import * as literPer100Km from './literPer100KilometerMetrics.js'

group.fuel = "fuel"

types.fuel = {
    americanGallon : ["american gallon", "gal"],
    imperialGallon : ["imperial gallon", "gal"],
    kmPerLiter : ["kilometer per liter", "km/l"],
    literPer100Km : ["liter per 100Km", "l/100Km"]
}

export default {
    ...americanGallon.default,
    ...imperialGallon.default,
    ...kmPerLiter.default,
    ...literPer100Km.default,
    group,
    types
}