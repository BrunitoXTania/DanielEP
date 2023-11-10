let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `╭━〔𝐀𝐫𝐫𝐢𝐛𝐚 𝐄𝐯𝐨𝐥𝐮𝐜𝐢𝐨́𝐧 𝐏𝐞𝐫𝐮́ 🇵🇪〕─\n┣${oi}\n┣❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┃💪🏻 @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `┃\n`
teks += `╰━━━━━[ 𝐁𝐫𝐮𝐧𝐢𝐭𝐨𝐗𝐓𝐚𝐧𝐢𝐚 ${vs}* ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
