import * as mph from './mphMetrics.js'
import * as fps from './fpsMetrics.js'
import * as ms from './msMetrics.js'

export default {
    ...mph.default,
    ...fps.default,
    ...ms.default
}