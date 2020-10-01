import * as second from './secondMetrics.js'
import * as minute from './minuteMetrics.js'
import * as hour from './hourMetrics.js'

export default {
    ...second.default,
    ...minute.default,
    ...hour.default
}