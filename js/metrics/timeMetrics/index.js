import * as second from './secondMetrics.js'
import * as minute from './minuteMetrics.js'
import * as hour from './hourMetrics.js'
import * as day from './dayMetrics.js'
import * as week from './weekMetrics.js'
import * as month from './monthMetrics.js'
import * as year from './yearMetrics.js'
import * as decade from './decadeMetrics.js'
import * as century from './centuryMetrics.js'

export default {
    ...second.default,
    ...minute.default,
    ...hour.default,
    ...day.default,
    ...week.default,
    ...month.default,
    ...year.default,
    ...decade.default,
    ...century.default
}