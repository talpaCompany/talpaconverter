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


group.lenght = "lenght"

types.lenght = {
    centimeter : ["centimeter", "cm"],
    feet : ["feet", "ft"],
    inch : ["inch", "in"],
    kilometer : ["kilometer", "km"],
    meter : ["meter", "m"],
    micrometer : ["micrometer", "μm"],
    mile : ["mile", "mi"],
    millimeter : ["millimeter", "mm"],
    nanometer : ["nanometer", "nm"],
    nauticalMile : ["nauticalMile", "nmi"],
    yard : ["yard", "yd"] 
}

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