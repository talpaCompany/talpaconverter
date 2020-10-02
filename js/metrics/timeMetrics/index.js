import * as second from './secondMetrics.js'
import * as minute from './minuteMetrics.js'
import * as hour from './hourMetrics.js'
import * as day from './dayMetrics.js'

export default {
    ...second.default,
    ...minute.default,
    ...hour.default,
    ...day.default
}