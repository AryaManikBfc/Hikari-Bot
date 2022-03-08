
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

seess = []
listjadibot = [];
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const jadibot = async(reply,Hikari,id) => {
	conn = new WAConnection()
    conn.logger.level = 'warn'
    conn.version = [2, 2143, 3]
    conn.browserDescription = [ 'JadiBot~Manik', '', '3.5' ]
    conn.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await Hikari.sendMessage(id,buffer,MessageType.image,{caption:'Scan QR Untuk menjadi bot\n*Rules:*\nQR akan diganti setiap 30 detik'})
    	setTimeout(() => {
       	Hikari.deleteMessage(id, bot.key)
       },30000)
    })
    sessi = randomNomor(1000000)
  
    fs.existsSync(`./JadiBot/${sessi}.json`) && conn.loadAuthInfo(`./JadiBot/${sessi}.json`)
    conn.on('connecting', () => {
    })
    conn.on('open', () => {
    	console.log('JadiBot Sudah Tersambung!');
    	reply(`Sukses Jadi BOT\n\n*Device*:\n\n ${JSON.stringify(conn.user,null,2)}`)
    })
    await conn.connect({timeoutMs: 30 * 1000})
    fs.writeFileSync(`./JadiBot/${sessi}.json`, JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
    listjadibot.push(conn.user)
    Hikari.updateProfileName('Fans Manik')
    Hikari.setStatus('Babunya Arya Manik\n⚠️AUTO REJECT CALL⚠️\n\nJangan telepon bot. ☎️\nSanksi: *❎ SOFT BLOCK*')
    conn.on('chat-update', async (message) => {
        require('../Hikari.js')(conn, message)
    })
}
 
const stopjadibot = (reply) => {
	conn = new WAConnection();
	conn.close()
	reply('Sukses stop jadibot')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}