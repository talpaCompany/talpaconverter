function mphToFps(number){
    return number * 1.467
}

function mphToMs(number){
    return (number / 2.237).toFixed(5)
}

function mphToKmh(number){
    return number * 1.609
}

function mphToNo(number){
    return (number / 1.151).toFixed(6)
}

export default {
    mphToFps,
    mphToMs,
    mphToKmh,
    mphToNo
}