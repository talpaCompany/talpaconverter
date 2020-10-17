import * as americangallon from './americanGallonMetrics.js'
import * as americanquarterliquid from './americanQuarterLiquidMetrics.js'
import * as americanpint from './americanPintMetrics.js'
import * as cup from './cupMetrics.js'
import * as americanounceliquid from './americanOunceLiquidMetrics.js'
import * as americansoapspoon from './americanSoapSpoonMetrics.js'

export default {
    ...americangallon.default,
    ...americanquarterliquid.default,
    ...americanpint.default,
    ...cup.default,
    ...americanounceliquid.default,
    ...americansoapspoon.default
}