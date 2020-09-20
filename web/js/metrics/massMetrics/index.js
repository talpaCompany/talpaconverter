import * as ton from './tonMetrics.js'
import * as kilo from './kilogramMetrics.js'
import * as gram from './gramMetrics.js'
import * as milligram from './milligramMetrics.js'
import * as microgram from './microgramMetrics.js'

export default {
    ...ton.default,
    ...kilo.default,
    ...gram.default,
    ...milligram.default,
    ...microgram.default
}