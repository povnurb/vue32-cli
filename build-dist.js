const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

let promises = [];

let index_html = ""
let index_html_length = 0
let favicon_png = ""
let favicon_png_length = 0
    // Archivos JS
let alarmas_js = ""
let alarmas_js_length = 0
let app_js = ""
let app_js_length = 0
let cloud_js = ""
let cloud_js_length = 0
let dashmix_js = ""
let dashmix_js_length = 0
let page404_js = ""
let page404_length = 0
let settings_js = ""
let settings_js_length = 0
let time_js = ""
let time_js_length = 0
let wifi_js = ""
let wifi_js_length = 0
let action_js = ""
let action_js_length = 0
    // Archivos CSS
let app_css= ""
let app_css_length = 0
let dashmix_css = ""
let dashmix_css_length = 0
let fa_regular_woff2 = ""
let fa_regular_woff2_length = 0
let fa_solid_woff2 = ""
let fa_solid_woff2_length = 0
let Simple_Icons_woff2 = ""
let Simple_Icons_woff2_length = 0
let xeco_css = ""
let xeco_css_length = 0

function convertToHex(data) {
    let value = "0x"
    let hexString = data
    for (let i = 0; i < hexString.length; i++) {
        value += hexString[i];
        if (i % 2 == 1 && i < hexString.length - 1)
            value += ",0x";
    }
    return {
        newData: value,
        length: hexString.length / 2
    }
}

console.log("INFO: ¡Convertidor de archivos iniciado!")
    // Inicio de la conversión de los Archivos a Binarios
promises.push(fs.readFileAsync("./dist/index.html.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        index_html = newData
        index_html_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/img/favicon.png.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        favicon_png = newData
        favicon_png_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/js/alarmas.js.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        alarmas_js = newData
        alarmas_js_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/js/app.js.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        app_js = newData
        app_js_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/js/cloud.js.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        cloud_js = newData
        cloud_js_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/js/dashmix.app.min.js.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        dashmix_js = newData
        dashmix_js_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/js/page404.js.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        page404_js = newData
        page404_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/js/settings.js.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        settings_js = newData
        settings_js_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/js/time.js.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        time_js = newData
        time_js_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/js/action.js.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        action_js = newData
        action_js_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/js/wifi.js.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        wifi_js = newData
        wifi_js_length = length
        return Promise.resolve()
    }))
    promises.push(fs.readFileAsync("./dist/css/app.css.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        app_css = newData
        app_css_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/css/dashmix.min.css.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        dashmix_css = newData
        dashmix_css_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/css/fa-regular-400.woff2.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        fa_regular_woff2 = newData
        fa_regular_woff2_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/css/fa-solid-900.woff2.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        fa_solid_woff2 = newData
        fa_solid_woff2_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/css/Simple-Line-Icons.woff2.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        Simple_Icons_woff2 = newData
        Simple_Icons_woff2_length = length
        return Promise.resolve()
    }))
promises.push(fs.readFileAsync("./dist/css/xeco.min.css.gz", 'hex')
    .then((data) => {
        let { newData, length } = convertToHex(data)
        xeco_css = newData
        xeco_css_length = length
        return Promise.resolve()
    }))

Promise.all(promises).
finally(() => {

    let content = `
            #include <pgmspace.h>
            #define index_html_length ${index_html_length}
            const uint8_t index_html[] PROGMEM = {${index_html}};
            #define favicon_png_length ${favicon_png_length}
            const uint8_t favicon_png[] PROGMEM = {${favicon_png}};
            #define alarmas_js_length ${alarmas_js_length}
            const uint8_t alarmas_js[] PROGMEM = {${alarmas_js}};
            #define app_js_length ${app_js_length}
            const uint8_t app_js[] PROGMEM = {${app_js}};
            #define cloud_js_length ${cloud_js_length}
            const uint8_t cloud_js[] PROGMEM = {${cloud_js}};
            #define dashmix_js_length ${dashmix_js_length}
            const uint8_t dashmix_js[] PROGMEM = {${dashmix_js}};
            #define page404_length ${page404_length}
            const uint8_t page404_js[] PROGMEM = {${page404_js}};
            #define settings_js_length ${settings_js_length}
            const uint8_t settings_js[] PROGMEM = {${settings_js}};
            #define time_js_length ${time_js_length}
            const uint8_t time_js[] PROGMEM = {${time_js}};
            #define action_js_length ${action_js_length}
            const uint8_t action_js[] PROGMEM = {${action_js}};
            #define wifi_js_length ${wifi_js_length}
            const uint8_t wifi_js[] PROGMEM = {${wifi_js}};
            #define app_css_length ${app_css_length}
            const uint8_t app_css[] PROGMEM = {${app_css}};            
            #define dashmix_css_length ${dashmix_css_length}
            const uint8_t dashmix_css[] PROGMEM = {${dashmix_css}};
            #define fa_regular_woff2_length ${fa_regular_woff2_length}
            const uint8_t fa_regular_woff2[] PROGMEM = {${fa_regular_woff2}};
            #define fa_solid_woff2_length ${fa_solid_woff2_length}
            const uint8_t fa_solid_woff2[] PROGMEM = {${fa_solid_woff2}};
            #define Simple_Icons_woff2_length ${Simple_Icons_woff2_length}
            const uint8_t Simple_Icons_woff2[] PROGMEM = {${Simple_Icons_woff2}};
            #define xeco_css_length ${xeco_css_length}
            const uint8_t xeco_css[] PROGMEM = {${xeco_css}};         
        `
    console.log("INFO: ¡Finalizada la conversión!")

    fs.writeFile('../vue32_esp_proyecto/src/vuejs.h', content, 'utf8', async() => {
        console.log("INFO: ¡Archivo (vuejs.h) creado correctamente!")
    })
    
})