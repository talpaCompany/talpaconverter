import * as temperature from './temperature/degrees.js'
import * as finance from './finance/bacenApi.js'

const converts = {
    ...temperature.default,
    ...finance.default
};


export default function returnConvert(nameConvert) {
    return converts[nameConvert]; 
}

// export default { returnConvert };