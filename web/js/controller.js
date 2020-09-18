import * as temperature from './temperature/degrees.js'
import * as bit from './metrics/dataMetrics/bitMetrics.js'
import * as kilobit from './metrics/dataMetrics/kilobitMetrics.js'
import * as finance from './finance/bacenApi.js'

const converts = {
    ...temperature,
    ...bit,
    ...kilobit,
    ...finance
};

function returnConvert(nameConvert) {
    return converts[nameConvert]; 
}

export default { returnConvert };