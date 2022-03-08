const fs = require('fs')
const _db = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const _bb = JSON.parse(fs.readFileSync('./database/user/glimit.json'))
const _bc = JSON.parse(fs.readFileSync('./database/user/glmit.json'))

exports.isLimit = function(sender, isPremium, isOwner, limitCount, _bb){
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
        fs.writeFileSync('./database/user/glimit.json', JSON.stringify(_bb))
        return false
    }
}
exports.limitAdd = function(sender, _bb){
    let found = false
	Object.keys(_bb).forEach((i) => {
		if (_bb[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			_bb[found].limit += 1
			fs.writeFileSync('./database/user/glimit.json', JSON.stringify(_bb))
		}
}
exports.getLimit = function(sender, limitCount, _bb){
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
exports.giveLimit = function(pemain, duit, _bb){
    let position = false
    Object.keys(_bb).forEach((i) => {
        if (_bb[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _bb[position].limit -= duit
        fs.writeFileSync('./database/user/glimit.json', JSON.stringify(_bb))
    } else {
        const njt = duit - duit - duit
        const bulim = ({
            id: pemain,
            limit: njt
                })
        _bb.push(bulim)
        fs.writeFileSync('./database/user/glimit.json', JSON.stringify(_bb))
    }
}
exports.addBalance = function(sender, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance += duit
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(_db))
    } else {
        const bulin = ({
            id: sender,
            balance: duit
                })
        _db.push(bulin)
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(_db))
    }
}
exports.kurangBalance = function(sender, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance -= duit
        fs.writeFileSync('./database/user/uang.json', JSON.stringify(_db))
    }
}
exports.getBalance = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].balance
    } else {
        return 0
    }
}
exports.isGame = function(sender, isOwner, gcount, _bc){
    if (isOwner) {return false;}
    let found = false;
    for (let i of _bc){
        if(i.id === sender){
            let limits = i.glimit;
            if (limits >= gcount) {
                found = true;
                return true;
            }else{
                found = true;
                return false;
            }
        }
    }
    if (found === false){
        let obj = {id: sender, glimit:0};
        _bc.push(obj);
        fs.writeFileSync('./database/user/glmit.json',JSON.stringify(_db));
        return false;
    }
}
exports.gameAdd = function(sender, _bc){
    var found = false;
    Object.keys(_bc).forEach((i) => {
        if(_bc[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _bc[found].glimit += 1;
        fs.writeFileSync('./database/user/glmit.json',JSON.stringify(_bc));
    }
}
exports.givegame = function(pemain, duit, _bc){
    let position = false
    Object.keys(_bc).forEach((i) => {
        if (_bc[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _bc[position].glimit -= duit
        fs.writeFileSync('./database/user/glmit.json', JSON.stringify(_bc))
    } else {
        const njti = duit - duit - duit
        const bulimi = ({
            id: pemain,
            glimit: njti
                })
        _bc.push(bulimi)
        fs.writeFileSync('./database/user/glmit.json', JSON.stringify(_bc))
    }
}
exports.cekGLimit = function(sender, gcount, _bc){
    let position = false
    Object.keys(_bc).forEach((i) => {
        if(_bc[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return gcount - _bc[position].glimit
    } else {
        return gcount
    }
}
