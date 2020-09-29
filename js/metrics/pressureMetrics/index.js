import * as atm from './atmMetrics.js'
import * as bar from './barMetrics.js'

export default {
    ...atm.default,
    ...bar.default
}