import * as hertz from './hertzMetrics.js'
import * as kiloHertz from './kiloHertzMetrics.js'
import * as megaHertz from './megaHertzMetrics.js'
import * as gigaHertz from './gigaHertzMetrics.js'

export default {
    ...hertz.default,
    ...kiloHertz.default,
    ...megaHertz.default,
    ...gigaHertz.default,
}