import * as americangallon from './americanGallonMetrics.js'
import * as americanquarterliquid from './americanQuarterLiquidMetrics.js'
import americanPintMetrics, * as americanpint from './americanPintMetrics.js'

export default {
    ...americangallon.default,
    ...americanquarterliquid.default,
    ...americanPintMetrics.default
}