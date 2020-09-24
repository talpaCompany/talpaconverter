import * as ton from './tonMetrics.js'
import * as kilo from './kilogramMetrics.js'
import * as gram from './gramMetrics.js'
import * as milligram from './milligramMetrics.js'
import * as microgram from './microgramMetrics.js'
import * as tonOfDisp from './tonOfDisplacementMetrics.js'
import * as shortTon from './shortTonMetrics.js'
import * as stone from './stoneMetrics.js'
import * as pound from './poundMetrics.js'

export default {
    ...ton.default,
    ...kilo.default,
    ...gram.default,
    ...milligram.default,
    ...microgram.default,
    ...tonOfDisp.default,
    ...shortTon.default,
    ...stone.default,
    ...pound.default
}