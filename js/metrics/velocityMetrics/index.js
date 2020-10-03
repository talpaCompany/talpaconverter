import * as mph from './mphMetrics.js'
import * as fps from './fpsMetrics.js'

export default {
    ...mph.default,
    ...fps.default
}