/**
 * Created by Lijun on 2018/1/17.
 */
const mock = {}
require('fs').readdirSync(require('path').join(__dirname + '/src/data')).forEach(function(file) {
    Object.assign(mock, require('./src/mock/' + file))
})
export default mock


