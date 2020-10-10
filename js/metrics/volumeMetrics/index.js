import * as americangallon from './americanGallonMetrics.js'
import * as americanquarterliquid from './americanQuarterLiquidMetrics.js'

export default {
    ...americangallon.default,
    ...americanquarterliquid.default
}