import * as centimeter from './centimeterMetrics.js'
import * as feet from './feetMetrics.js'
import * as inch from './inchMetrics.js'
import * as kilometer from './kilometerMetrics.js'
import * as meter from './meterMetrics.js'
import * as micrometer from './micrometerMetrics.js'
import * as mile from './mileMetrics.js'
import * as millimeter from './millimeterMetrics.js'
import * as nanometer from './nanometerMetrics.js'
import * as nauticalMile from './nauticalMileMetrics.js'
import * as yard from './yardMetrics.js'

export default {
    ...centimeter.default,
    ...feet.default,
    ...inch.default,
    ...kilometer.default,
    ...meter.default,
    ...micrometer.default,
    ...mile.default,
    ...millimeter.default,
    ...nanometer.default,
    ...nauticalMile.default,
    ...yard.default,
    group,
    types
}