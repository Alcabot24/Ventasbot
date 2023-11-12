import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗] Ingresa un texto para buscar, ejemplo: ${usedPrefix + command} HachikoBot-MD*`;
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  //const imagen = await conn.getFile(json.items[0].owner.avatar_url).data
  const str = json.items.map((repo, index) => {
  return `
*${1 + index}. ${repo.full_name}${repo.fork ? ' (fork)' : ''}*
🔗 *𝚄𝚁𝙻:* ${repo.html_url}
📅 *𝙲𝚁𝙴𝙰𝙳𝙾 𝙴𝙻:* ${formatDate(repo.created_at)}
🔄 *𝙰𝙲𝚃𝚄𝚂𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝙻:* ${formatDate(repo.updated_at)}
📥 *𝙲𝙻𝙾𝙽𝙴:* $ git clone ${repo.clone_url}
👁 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${repo.watchers} 
 🍴 *𝙵𝙾𝚁𝙺𝚂:* ${repo.forks}  
⭐ *𝙴𝚂𝚃𝚁𝙴𝙻𝙻𝙰𝚂:* ${repo.stargazers_count}  🗒️ *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:*
${repo.description ? ` *Descripción:*\n${repo.description}` : ''}
`.trim()}).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  //conn.sendMessage(m.chat, {text: str.trim()}, {quoted: m})
conn.sendMessage(m.chat, {text: str.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen7, "mediaUrl": global.md}}}, {quoted: m});  
};
handler.help = ['githubs'];
handler.tags = ['buscadores'];
handler.command = /^(ghs|githubs|githubs|githubsearch|gits|gitsearch)$/i;
export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}
