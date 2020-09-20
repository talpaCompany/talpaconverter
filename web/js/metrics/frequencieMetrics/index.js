import * as hertz from './hertzMetrics.js'
import * as kiloHertz from './kiloHertzMetrics.js'
import * as megaHertz from './megaHertzMetrics.js'
import * as gigaHertz from './gigaHertzMetrics.js'

group.frequencie = "hertz"

types.frequencie = {
    hertz : ["hertz", "Hz"],
    kiloHertz : ["kiloHertz", "kHz"],
    megaHertz : ["megaHertz", "mHz"],
    gigaHertz : ["gigaHertz", "gHz"]
}

export default {
    ...hertz.default,
    ...kiloHertz.default,
    ...megaHertz.default,
    ...gigaHertz.default,
    group,
    types
}