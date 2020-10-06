import * as squarekilometer from './squareKilometerMetrics.js'
import * as squaremeter from './squareMeterMetrics.js'
import * as squaremile from './squareMileMetrics.js'
import * as squareyard from './squareYardMetrics.js'
import * as squarefoot from './squareFootMetrics.js'

export default {
    ...squarekilometer.default,
    ...squaremeter.default,
    ...squaremile.default,
    ...squareyard.default,
    ...squarefoot.default
}