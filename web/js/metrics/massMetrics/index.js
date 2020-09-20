import * as ton from './tonMetrics.js'
import * as kilo from './kilogramMetrics.js'
import * as gram from './gramMetrics.js'
import * as milligram from './milligramMetrics.js'

export default {
    ...ton.default,
    ...kilo.default,
    ...gram.default,
    ...milligram.default
}