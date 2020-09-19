import * as byte from './byteMetrics.js'
import * as gigabyte from './gigabyteMetrics.js'
import * as kilobyte from './kilobyteMetrics.js'
import * as megabyte from './megabyteMetrics.js'
import * as petabyte from './petabyteMetrics.js'
import * as terabyte from './terabyteMetrics.js'

group.data = "data"

types.data = {
    byte : ["byte", "b"],
    gigabyte : ["gigabyte", "gb"],
    kilobyte : ["kilonyte", "kb"],
    megabyte : ["megabyte", "mb"],
    petabyte : ["petabyte", "pb"],
    terabyte : ["terabyte", "tb"]
}

export default {
    ...byte.default,
    ...gigabyte.default,
    ...kilobyte.default,
    ...megabyte.default,
    ...petabyte.default,
    ...terabyte.default,
    group,
    types
}