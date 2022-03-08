//CREATE BY MANIK

const fs = require('fs-extra');
const _dir = JSON.parse(fs.readFileSync('./database/adventure/Orangrpg.json'))

const addOrangUser = (userId, time, rumahrp, _dir) => {
    const obj = { id: userId, time: 0, rumahrp: rumahrp }
    _dir.push(obj)
    fs.writeFileSync('./database/adventure/Orangrpg.json', JSON.stringify(_dir));
}


const checkOrangUser = (userId, _dir) => {
    let status = false;
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true;
        }
    })
    return status
}

const getOrangReason = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].rumahrp
    }
}


const getOrangTime = (userId, _dir) => {
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


const getOrangId = (userId, _dir) => {
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


const getOrangPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}

module.exports = {
    addOrangUser,
    checkOrangUser,
    getOrangReason,
    getOrangTime,
    getOrangId,
    getOrangPosition
}