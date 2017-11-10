const webpack = require('webpack')
const wpCfg = require('./webpack.client.config.js')
const wpServerCfg = require('./webpack.server.config.js')
const compiler = webpack(wpCfg)
const serverCompiler = webpack(wpServerCfg)
const fs = require('fs-extra')
const path = require('path')

fs.removeSync(path.resolve('./dist'))

compiler.watch({}, (err, stats) => {
    if (err === null && stats.compilation.errors.length === 0) {
        console.log('编译成功')
    } else {
        console.log('编译出现错误...')
        console.log(stats.compilation.errors, err)
    }
})

serverCompiler.watch({}, (err, stats) => {
    if (err === null && stats.compilation.errors.length === 0) {
        console.log('编译成功')
    } else {
        console.log('编译出现错误...')
        console.log(stats.compilation.errors[0].message, err)
    }
})
