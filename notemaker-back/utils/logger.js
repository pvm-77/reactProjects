const print = (...params) => {
    console.log(...params)
}

const error = (...params) => {
    console.error(...params)
}

module.exports = {
    print, error
}