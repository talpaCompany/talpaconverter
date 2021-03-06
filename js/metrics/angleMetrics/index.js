import * as degree from './degreeMetrics.js'
import * as grado from './gradoMetrics.js'
import * as thousandangular from './thousandAngularMetrics.js'
import * as arcminute from './arcMinuteMetrics.js'
import * as radian from './radianMetrics.js'
import * as arcsecond from './arcSecondMetrics.js'

export default {
    ...degree.default,
    ...grado.default,
    ...thousandangular.default,
    ...arcminute.default,
    ...radian.default,
    ...arcsecond.default
}