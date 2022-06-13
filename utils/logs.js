const {DateTime}  = require('luxon')

exports.requestLog = (path,msg='') =>{
    const dt = DateTime.now()
    return console.info(`[REQUEST: ${path}] \n ${dt.toISO()}`)
}