import * as second from './secondMetrics.js'
import * as minute from './minuteMetrics.js'

export default {
    ...second.default,
    ...minute.default
}