const fs = require('fs-extra')
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const checkATMuser = (userId, _uang) => {
    let position = false
    Object.keys(_uang).forEach((i) => {
        if (_uang[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        return _uang[position].balance
    }
}

const addATM = (userId, _uang) => {
    const obj = {
            id: sender,
            balance: 0}
    _uang.push(obj)
    fs.writeFileSync('./database/user/uang.json', JSON.stringify(_uang))
}

const addKoinUser = (userId, amount, _uang) => {
    let position = false
    Object.keys(_uang).forEach((i) => {
        if (_uang[i].id === userId) {
            position = i
        }
    })
    if (position !== false) {
        _uang[position].balance += amount;
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(_uang))
    }
}

module.exports = {
    checkATMuser,
    addATM,
    addKoinUser
}