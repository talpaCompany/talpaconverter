import * as americanGallon from './americanGallonMetrics.js'
import * as imperialGallon from './imperialGallonMetrics.js'
import * as kmPerLiter from './kilometerPerLiterMetrics.js'
import * as literPer100Km from './literPer100KilometerMetrics.js'

export default {
    ...americanGallon.default,
    ...imperialGallon.default,
    ...kmPerLiter.default,
    ...literPer100Km.default,
    group,
    types
}