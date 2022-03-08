const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./FuncBot/myfunc')
const { WAConnection: _WAConnection, Browsers, MessageType } = require('@adiwajshing/baileys')
const simple = require('./FuncBot/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const  { Functions } = require('./FuncBot/functions.js');
const { color, bgcolor } = require('./FuncBot/color')
const fs = require("fs-extra")


const figlet = require('figlet')
const { uncache, nocache } = require('./FuncBot/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./FuncMsg/group')

baterai = 'TIDAK TERDETEKSI'
charging = 'TIDAK TERDETEKSI'

global.media = require('./src/json/media.json');

global.functions = new Functions();

global.logo = { buffer:functions.fs.readFileSync('./src/images/logo.jpg'),message:media.logo };
require('./Hikari.js')
nocache('../Hikari.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./index.js')
nocache('../index.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const sode = `${setting.owner}@s.whatsapp.net`
const Bfake = fs.readFileSync ('./media/Hikari.png','base64')
const mdia = fs.readFileSync ('./media/Profile.png')

const starts = async (Hikari = new WAConnection()) => {
Hikari.version = [ 2, 2140, 12 ]
	Hikari.logger.level = 'warn'

	console.log(color(figlet.textSync('Hikari BOT', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[Hikari System]', 'cyan'), color('Bot Telah online Sekarang!', 'yellow'))
	console.log(color('[Hikari System]', 'cyan'), color('Selamat Datang Kembali, Owner! Semoga Kamu Bahagia~', 'yellow'))
	Hikari.browserDescription = ["HikariBot", "Chrome", "3.0.0"];


	// Menunggu QR
	Hikari.on('qr', () => {
		console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color('Please scan qr code'))
	})


	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && Hikari.loadAuthInfo(`./${setting.sessionName}.json`)
	Hikari.on('connecting', () => {
		console.log(color('[ Manik Gans ]', 'cyan'), color('Menghubungkan....'));
	})

	//connect 

	Hikari.on('open', () => {
		console.log(color('[ Manik Gans ]', 'cyan'), color('Bot Sudah Online!'));
		creat = 'Arya Manik'
		botnm = 'Hikari-Bot'
		masber = 'No Expired'
		const users = [
		{Creator: creat, Whatsapp: 6285737134572, NameBot: botnm, Versi: 2, Expired: masber}
		];
		console.table(users)
	})

	// session
	await Hikari.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(Hikari.base64EncodedAuthInfo(), null, '\t'))
    Hikari.updateProfileName('Fans Manik')
    Hikari.setStatus('Babunya Arya Manik\n⚠️AUTO REJECT CALL⚠️\n\nJangan telepon bot. ☎️\nSanksi: *❎ SOFT BLOCK*')
   
	// Baterai
	Hikari.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		if(batterylevel < 20){
			console.log('Baterai Anda:' + batterylevel + '% Silahkan Charger') 
			}
		if(batterylevel > 20){
		console.log('Baterai : ' + batterylevel + '%')
		}
	})

	global.batrei = global.batrei ? global.batrei : []
	Hikari.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})
	//AutoRejectCallFunction
	callBlock = true
  Hikari.on("CB:Call", (json) => {
    if (callBlock == true) {
  Hikari
    .query({
      json: [
        "action",
        "call",
        [
          "call",
          {
            from: Hikari.user.jid,
            to: json[1].from,
            id: baileys.generateMessageID(),
          },
          [
            [
              "reject",
              {
                "call-id": json[1].id,
                "call-creator": json[1].from,
                count: "0",
              },
              null,
            ],
          ],
        ],
      ],
    })
   }
})
  
	// welcome
	Hikari.on('group-participants-update', async (anu) => {
		await welcome(Hikari, anu)
	})
  Hikari.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
    m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));
    const isGroup = m.key.remoteJid.endsWith("@g.us")
    const isAntidel = isGroup ? antidel.includes(m.key.remoteJid) : false;
    const moment = require("moment-timezone");
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const type = Object.keys(m.message)[0];
    if (!isAntidel) return
    Hikari.sendMessage(
      m.key.remoteJid,
      `\`\`\`「 Anti Delete 」\`\`\`

  •> Nama : @${m.participant.split("@")[0]}
  •> Waktu : ${jam} ${week} ${calender}
  •> Type : ${type}`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );
    Hikari.copyNForward(m.key.remoteJid, m.message);
  });
	Hikari.on('chat-update', async (message) => {
		require('./Hikari.js')(Hikari, message)
	})
}
starts()
