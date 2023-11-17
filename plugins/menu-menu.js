import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];

  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
  await conn.reply(m.chat, '𝙀𝙣 𝙗𝙧𝙚𝙫𝙚 𝙨𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙖 𝙚𝙡 𝙢𝙚𝙣𝙪. . .',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '👋 ᕼOᒪᗩ!!', body: 'sɪɢᴜᴇᴍᴇ ᴇɴ ɪɴsᴛᴀɢʀᴀᴍ', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐶');
    await conn.sendMessage(m.chat, { react: { text: '🐶', key: m.key } })
  let txt =`
┏━━━━━━━━━━━━━━━━┓
┣ *[  𝙈𝙀𝙉𝙐 𝘿𝙀 𝘼𝙇𝘾𝘼 💥]*
┣* 𝘾𝙍𝙀𝘼𝘿𝙊𝙍* : *𝙰𝚕𝚌𝚊 𝚅𝚎𝚗𝚝𝚊𝚜*
┣* 𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝙊* : *𝚠𝚊.𝚖𝚎/𝟻𝟸𝟾𝟸𝟺𝟷𝙾𝟻𝙾𝟸𝟸𝟾*
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙂𝙍𝙐𝙋𝙊𝙎 𝘼𝙅𝙐𝙎𝙏𝙀𝙎
┗━━━━━━━━━━
┣⚙️ .𝐀𝐝𝐝 𝚗𝚞𝚖𝚎𝚛𝚘
┣⚙️ .𝐊𝐢𝐜𝐤 @𝚝𝚊𝚐
┣⚙️ .𝐋𝐢𝐬𝐭𝐚𝐧𝐮𝐦 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐆𝐫𝐮𝐩𝐨 𝚊𝚋𝚛𝚒𝚛 / 𝚌𝚎𝚛𝚛𝚊𝚛
┣⚙️ .𝐏𝐫𝐨𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
┣⚙️ .𝐀𝐝𝐦𝐢𝐧𝐬 𝚝𝚎𝚡𝚝𝚘 (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣⚙️ .𝐃𝐞𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
┣⚙️ .𝐈𝐧𝐟𝐨𝐠𝐫𝐨𝐮𝐩
┣⚙️ .𝐑𝐞𝐬𝐞𝐭𝐥𝐢𝐧𝐤
┣⚙️ .𝐋𝐢𝐧𝐤
┣⚙️ .𝐒𝐞𝐭𝐧𝐚𝐦𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐒𝐞𝐭𝐝𝐞𝐬𝐜 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐈𝐧𝐯𝐨𝐜𝐚𝐫 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐒𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐒𝐞𝐭𝐛𝐲𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐇𝐢𝐝𝐞𝐭𝐚𝐠 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐖𝐚𝐫𝐧 @𝚝𝚊𝚐
┣⚙️ .𝐔𝐧𝐰𝐚𝐫𝐧 @𝚝𝚊𝚐
┣⚙️ .𝐋𝐢𝐬𝐭𝐰𝐚𝐫𝐧
┣⚙️ .𝐅𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬
┣⚙️ .𝐃𝐞𝐬𝐭𝐫𝐚𝐛𝐚
┣⚙️ .𝐒𝐞𝐭𝐩𝐩𝐩 𝚒𝚖𝚊𝚐𝚎𝚗
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎
┗━━━━━━━━━━━━
┣⚪️ .𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐩𝐚𝐜𝐤  𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣⚪️ .𝐏𝐥𝐚𝐲 𝚝𝚎𝚡𝚝𝚘
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝙋𝙄𝙍𝙊𝙋𝙊𝙎
┗━━━━━━━━━━
┣✏️ .𝐏𝐢𝐫𝐨𝐩𝐨
┣✏️ .𝐂𝐨𝐧𝐬𝐞𝐣𝐨
┣✏️ .𝐅𝐫𝐚𝐬𝐞𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
┣✏️ .𝐇𝐢𝐬𝐭𝐨𝐫𝐢𝐚𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎
┗━━━━━━━━━━
┣🫰🏻 .𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚟𝚒𝚍𝚎𝚘
┣🫰🏻 .𝐪𝐜 𝚝𝚎𝚡𝚝𝚘
┣🫰🏻 .𝐤𝐢𝐬𝐬 @𝚝𝚊𝚐
┗━━━━━━━━━━━━━━━━┛
*⛔️𝙲𝚄𝙰𝙻𝚀𝚄𝙸𝙴𝚁 𝙳𝚄𝙳𝙰 𝙼𝙰𝙽𝙳𝙰𝚁 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙰𝙻 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙶𝚁𝚇*`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '乂 𝙷 𝙰 𝙲 𝙷 𝙸 𝙺 𝙾 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 乂', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": [gp1,canal].getRandom(), "sourceUrl": [gp1,canal].getRandom()}}}, {quoted: fkon});
 // m.react('🎮');
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙿𝙾𝚁𝙵𝙰𝚅𝙾𝚁 𝚄𝚂𝙴 𝙴𝙻 .allmenu*', m);
  }
};
handler.command = /^(menu|cmd|help|comandos)$/i;
export default handler;

function ucapan() {
    const time = moment.tz('America/Los_Angeled').format('HH')
    let res = "Buenas noches 🌙"
    if (time >= 4) {
        res = "Buen día 🌄"
    }
    if (time > 10) {
        res = "Buenas tardes ☀️"
    }
    if (time >= 15) {
        res = "Buenas tardes 🌅"
    }
    if (time >= 18) {
        res = "Buenas noches 🌙"
    }
    return res
}

                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                
