import * as finance from './finance/bacenApi.js'
import * as temperature from './temperature/degrees.js'
import * as dataMetrics from './metrics/dataMetrics/index.js'
import * as energy from './metrics/energyMetrics/index.js'
import * as frequencie from './metrics/frequencieMetrics/index.js'
import * as fuel from './metrics/fuelMetrics/index.js'
import * as lenght from './metrics/lenghtMetrics/index.js'
import * as mass from './metrics/massMetrics/index.js'
import * as pressure from './metrics/pressureMetrics/index.js'
import * as time from './metrics/timeMetrics/index.js'
import * as velocity from './metrics/velocityMetrics/index.js'
import * as area from './metrics/areaMetrics/index.js'
import * as angle from './metrics/angleMetrics/index.js'
import * as volume from './metrics/volumeMetrics/index.js'

const converts = {
    ...finance.default,
    ...dataMetrics.default,
    ...energy.default,
    ...frequencie.default,
    ...fuel.default,
    ...lenght.default,
    ...mass.default,
    ...temperature.default,
    ...pressure.default,
    ...time.default,
    ...velocity.default,
    ...area.default,
    ...angle.default,
    ...volume.default
};


export default function returnConvert(nameConvert) {
    return converts[nameConvert]; 
}