import * as squarekilometer from './squareKilometerMetrics.js'
import * as squaremeter from './squareMeterMetrics.js'

export default {
    ...squarekilometer.default,
    ...squaremeter.default
}