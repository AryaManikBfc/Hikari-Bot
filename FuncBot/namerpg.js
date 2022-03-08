//CREATE BY MANIK

const fs = require('fs-extra');
const _dir = JSON.parse(fs.readFileSync('./database/adventure/namerpg.json'))

const addNameUser = (userId, time, namerp, _dir) => {
    const obj = { id: userId, time: 0, namerp: namerp }
    _dir.push(obj)
    fs.writeFileSync('./database/adventure/namerpg.json', JSON.stringify(_dir));
}


const checkNameUser = (userId, _dir) => {
    let status = false;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true;
        }
    })
    return status
}

const getNameReason = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].namerp
    }
}


const getNameTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}


const getNameId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}


const getNamePosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}

module.exports = {
    addNameUser,
    checkNameUser,
    getNameReason,
    getNameTime,
    getNameId,
    getNamePosition
}