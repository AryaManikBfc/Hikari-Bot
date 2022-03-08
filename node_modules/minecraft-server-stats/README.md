# Minecraft server stats
See the status of your minecraft server!

[![downloadsBadge](https://img.shields.io/npm/dt/minecraft-server-stats?style=for-the-badge)](https://npmjs.com/minecraft-server-stats)
[![versionBadge](https://img.shields.io/npm/v/minecraft-server-stats?style=for-the-badge)](https://npmjs.com/minecraft-server-stats)

# 💻 Usage
1. Install module: `npm install minecraft-server-stats`
2. Insert the following code for a good result:
```
const { status } = require("minecraft-server-stats");
status('mc.hypixel.net').then(response => {
    console.log(response)
})
```

# 🔧 Other functions
- Ping
```
const { ping } = require("minecraft-server-stats");
ping('mc.hypixel.net').then(response => {
    console.log(response)
})
```

- Playerlist
```
const { playerList } = require("minecraft-server-stats");
playerList('mc.hypixel.net').then(response => {
    console.log(response)
})
```

# 📑 License
This project has an <a href="https://github.com/DotwoodMedia/minecraft-server-stats/blob/main/LICENSE">Apache 2.0</a> license