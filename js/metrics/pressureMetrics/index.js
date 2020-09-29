import * as atm from './atmMetrics.js'
import * as bar from './barMetrics.js'
import * as pascal from './pascalMetrics.js'

export default {
    ...atm.default,
    ...bar.default,
    ...pascal.default
}