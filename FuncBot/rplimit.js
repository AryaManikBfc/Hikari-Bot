//CREATE BY MANIK

const fs = require('fs')
const _bb = JSON.parse(fs.readFileSync('./database/adventure/rplimit.json'))

exports.isRpgLimit = function(sender, isPremium, isOwner, limitCount, _bb){
    if (isOwner) return false
    if (isPremium) return false
    let found = false
    for (let i of _bb) {
        if (i.id === sender) {
            let limits = i.limit
            if (limits >= limitCount) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false) {
        const obj = { id: sender, limit: 0 }
        _bb.push(obj)
        fs.writeFileSync('./database/adventure/rplimit.json', JSON.stringify(_bb))
        return false
    }
}
exports.rpgLimitAdd = function(sender, _bb){
    let found = false
	Object.keys(_bb).forEach((i) => {
		if (_bb[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			_bb[found].limit -= 1
			fs.writeFileSync('./database/adventure/rplimit.json', JSON.stringify(_bb))
		}
}
exports.getRpgLimit = function(sender, limitCount, _bb){
    let found = false
    Object.keys(_bb).forEach((i) => {
        if (_bb[i].id === sender) {
            found = i
        }
    })
    if (found !== false) {
        return limitCount - _bb[found].limit
    } else {
        return limitCount
    }
}
exports.giveRpgLimit = function(pemain, duit, _bb){
    let position = false
    Object.keys(_bb).forEach((i) => {
        if (_bb[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _bb[position].limit -= duit
        fs.writeFileSync('./database/adventure/rplimit.json', JSON.stringify(_bb))
    } else {
        const njt = duit - duit - duit
        const bulim = ({
            id: pemain,
            limit: njt
                })
        _bb.push(bulim)
        fs.writeFileSync('./database/adventure/rplimit.json', JSON.stringify(_bb))
    }
}