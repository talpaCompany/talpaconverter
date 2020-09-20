import * as ton from './tonMetrics.js'
import * as kilo from './kilogramMetrics.js'

export default {
    ...ton.default,
    ...kilo.default
}