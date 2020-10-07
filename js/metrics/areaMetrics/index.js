import * as squarekilometer from './squareKilometerMetrics.js'
import * as squaremeter from './squareMeterMetrics.js'
import * as squaremile from './squareMileMetrics.js'
import * as squareyard from './squareYardMetrics.js'
import * as squarefoot from './squareFootMetrics.js'
import * as squareinch from './squareInchMetrics.js'
import * as hectare from './hectareMetrics.js'

export default {
    ...squarekilometer.default,
    ...squaremeter.default,
    ...squaremile.default,
    ...squareyard.default,
    ...squarefoot.default,
    ...squareinch.default,
    ...hectare.default
}