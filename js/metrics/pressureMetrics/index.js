import * as atm from './atmMetrics.js'
import * as bar from './barMetrics.js'
import * as pascal from './pascalMetrics.js'
import * as psi from './psiMetrics.js'

export default {
    ...atm.default,
    ...bar.default,
    ...pascal.default,
    ...psi.default
}