import * as mph from './mphMetrics.js'
import * as fps from './fpsMetrics.js'
import * as ms from './msMetrics.js'
import * as kmh from './kmhMetrics.js'
import * as no from './noMetrics.js'

export default {
    ...mph.default,
    ...fps.default,
    ...ms.default,
    ...kmh.default,
    ...no.default
}