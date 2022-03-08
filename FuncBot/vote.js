const fs = require('fs');

const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const deleteVote = (from) => {
  if (fs.existsSync('./FuncBot/vote/' + from + '.json') && fs.existsSync('./FuncBot/vote' + from + '.json')) {
    fs.unlinkSync(`./FuncBot/vote/${from}.json`)
    fs.unlinkSync(`./FuncBot/${from}.json`)
  }
}

const addVote = async(_id, reason, votes, duration, reply) => {
  // voting.push(_id)
  fs.writeFileSync(`./FuncBot/${_id}.json`, '[]');
  fs.writeFileSync(`./FuncBot/vote/${_id}.json`, '[]');
  await sleep(2000);
  let votees = JSON.parse(fs.readFileSync(`./FuncBot/vote/${_id}.json`))
  votees.push({
    reason: reason ? reason : 'korban asal vote',
    votes: votes.trim() +'@s.whatsapp.net',
    durasi: duration
  })
  fs.writeFileSync(`./FuncBot/vote/${_id}.json`, JSON.stringify(votees))
  setTimeout(async function() {
    let vote = JSON.parse(fs.readFileSync(`./FuncBot/${_id}.json`))
    let tru = vote.filter(a => a.voting == '✅')
    let fals = vote.filter(a => a.voting == '❌')
    let anu = `*Waktu Voting Habis*
    
*Hasil Akhir*
✅ : ${tru.length}
❌ : ${fals.length}

`
    for (let i of vote) {
      anu += `@${i.participant.split("@")[0]} ${i.voting == "❌" ? "( Devote )" : "( Vote )"}\n`
    }
    reply(anu)
    fs.unlinkSync(`./FuncBot/vote/${_id}.json`)
    fs.unlinkSync(`./FuncBot/${_id}.json`)
  }, duration * 60 * 1000);
}

module.exports = {
  deleteVote,
  addVote,
}