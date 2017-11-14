const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const {createBundleRenderer} = require('vue-server-renderer');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');
const template = fs.readFileSync(path.resolve(__dirname, './template.html'), 'utf-8')

const WindowMock = require('window-mock').default;
let window = new WindowMock();
global.window = window;
global.localStorage = window.localStorage;
global.document = window.document;

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template: template,
    clientManifest: clientManifest
});

const renderToString = function(context) {
    return new Promise((resolve, reject) => {
        renderer.renderToString(context, (err, html) => {
            if (err) reject(err)
            resolve(html)
        })
    })
}

app.get('/', (req, res) => {
    let html = ''
    try {
        renderer.renderToString((err, html) => {
            if (err) {
                console.log(err.message);
                console.log(err.stack);
            }
            console.log(html);
            res.send(html)
        });
    } catch (err) {
        console.log(err.message);
        console.log(err.stack);
    }
})

app.listen(8080, () => {
    console.log('Listen 8080')
})
