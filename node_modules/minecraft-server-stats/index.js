const fetch = require("node-fetch");

module.exports = {
    status: async function (ip) {
        const result = await fetch(`https://api.mcsrvstat.us/2/${ip}`).catch(err => { console.log(err) });

        const data = await result.json();
        return data;
    },
    
    ping: async function (ip) {
        const result = await fetch(`https://api.mcsrvstat.us/2/${ip}`).catch(err => { console.log(err) });

        const data = await result.json();
        return data.debug.ping;
    },

    playerList: async function (ip) {
        const result = await fetch(`https://api.mcsrvstat.us/2/${ip}`).catch(err => { console.log(err) });

        const data = await result.json();
        return data.players.list;
    },
};