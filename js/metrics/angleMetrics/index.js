import * as degree from './degreeMetrics.js'
import * as grado from './gradoMetrics.js'
import * as thousandangular from './thousandAngularMetrics.js'

export default {
    ...degree.default,
    ...grado.default,
    ...thousandangular.default
}