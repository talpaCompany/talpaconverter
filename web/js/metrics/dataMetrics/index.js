import * as byte from './byteMetrics.js'
import * as gigabyte from './gigabyteMetrics.js'
import * as kilobyte from './kilobyteMetrics.js'
import * as megabyte from './megabyteMetrics.js'
import * as petabyte from './petabyteMetrics.js'
import * as terabyte from './terabyteMetrics.js'

export default {
    ...byte.default,
    ...gigabyte.default,
    ...kilobyte.default,
    ...megabyte.default,
    ...petabyte.default,
    ...terabyte.default,
}