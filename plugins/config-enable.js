let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let optionsFull = "* الخيار:* ✨ |  مرحباً
* الأمر:* مرحبًا ${usedPrefix + command}
* الوصف:* تنشيط أو إلغاء تنشيط الترحيب في المجموعة.

 --------------------------------

* الخيار:* 🌎 |  الوضع العام
* الأمر:* ${usedPrefix + command} عام
* الوصف:* يصبح الروبوت للاستخدام العام و / أو الخاص.
* ملاحظة:* لا يمكن استخدام هذا الأمر إلا من قبل مالكي الروبوتات.

 --------------------------------

* الخيار:* 🥵 |  الوضع HORNY
* الأمر:* ${usedPrefix + command} وضع القرن
* الوصف:* تنشيط أو إلغاء تنشيط أوامر +18 في المجموعة.

 --------------------------------

* الخيار:* 🔗 |  مضاد للربط
* الأمر:* ${usedPrefix + command} antilink
* الوصف:* تنشيط أو إلغاء تنشيط مانع الروابط في WhatsApp.
* ملاحظة:* يجب أن يكون التقييد نشطًا.

 --------------------------------

* الخيار:* 🔗 |  مضاد للارتباط 2
* الأمر:* ${usedPrefix + command} antilink2
* الوصف:* تمكين أو تعطيل الروابط المضادة بدءًا من HTTPS.
* ملاحظة:* يجب أن يكون التقييد نشطًا.

 --------------------------------

* الخيار:* 🔎 |  يكشف
* الأمر:* ${usedPrefix + command} يكتشف
* الوصف:* تنشيط أو إلغاء تنشيط إشعارات التغييرات في المجموعة.

 --------------------------------

* الخيار:* 🔎 |  كشف 2
* الأمر:* ${usedPrefix + command} discovery2
* الوصف:* يكتشف التغييرات في المجموعة ويحافظ على إدارة أفضل.

 --------------------------------

* الخيار:* ❗ |  مقيد
* الأمر:* تقييد ${usedPrefix + command}
* الوصف:* قم بتشغيل قيود الروبوت أو إيقاف تشغيلها ، مثل إزالة أو إضافة أشخاص إلى مجموعة.
* ملاحظة:* لا يمكن استخدام هذا الأمر إلا من قبل مالكي الروبوتات.

 --------------------------------

* الخيار:* ☑️ |  أوتورياد
* الأمر:* ${usedPrefix + command} للقراءة التلقائية
* الوصف:* تعليم الرسائل والحالات تلقائيًا كمقروءة.
* ملاحظة:* لا يمكن استخدام هذا الأمر إلا من قبل مالكي الروبوتات.

 --------------------------------

* الخيار:* 🔊 |  اصوات
* الأمر:* صوت ${usedPrefix + command}
* الوصف:* ينشط أو يلغي تنشيط أوامر الصوت بدون بادئات ، في المجموعة.

 --------------------------------

* الخيار:* 👾 |  أوتوستيكر
* الأمر:* ملصق تلقائي ${usedPrefix + command}
* الوصف:* تصبح جميع الصور أو مقاطع الفيديو المرسلة في المجموعة ملصقات.

 --------------------------------

* الخيار:* 💬 |  فقط
* الأمر:* ${usedPrefix + command} pconly
* الوصف:* لن يستجيب الروبوت للأوامر إلا إذا كانت محادثة خاصة.
* ملاحظة:* لا يمكن استخدام هذا الأمر إلا من قبل مالكي الروبوتات.

 --------------------------------

* الخيار:* 🏢 |  فقط
* الأمر:* ${usedPrefix + command} gconly
* الوصف:* لن يستجيب الروبوت للأوامر إلا إذا كانت مجموعة.
* ملاحظة:* لا يمكن استخدام هذا الأمر إلا من قبل مالكي الروبوتات.

 --------------------------------

* الخيار:* ❌ |  مقتطفات مرة واحدة
* الأمر:* ${usedPrefix + command} antiviewonce
* الوصف:* الصور التي يتم إرسالها للمشاهدة مرة واحدة فقط ، يتم إرسالها بشكل طبيعي بواسطة الروبوت.

 --------------------------------

* الخيار:* 📵 |  منع المكالمات
* الأمر:* ${usedPrefix + command} ضد المكالمة
* الوصف:* سيقوم الروبوت بحظر الأشخاص الذين يتصلون به.
* ملاحظة:* لا يمكن استخدام هذا الأمر إلا من قبل مالكي الروبوتات.

 --------------------------------

* الخيار:* 💬 |  مكافحة خاصة
* الأمر:* ${usedPrefix + command} antiprivate
* الوصف:* سيقوم الروبوت بحظر الأشخاص الذين يكتبون إلى رسالة الروبوت الخاصة.
* ملاحظة:* لا يمكن استخدام هذا الأمر إلا من قبل مالكي الروبوتات.

 --------------------------------

* الخيار:* 🤬 |  مضاد للسموم
* الأمر:* ${usedPrefix + command} مضاد للسموم
* الوصف:* يكتشف الكلمات البذيئة ويحذر مشارك المجموعة قبل استبعاده.
* ملاحظة:* يجب أن يكون التقييد نشطًا.

 --------------------------------

* الخيار:* 🕸️ |  مضاد للانحشار
* الأمر:* ${usedPrefix + command} ضد الانحشار
* الوصف:* يكتشف الروبوت النصوص الطويلة التي يمكن أن تكون فيروسات وتتسبب في تأخر الدردشة ويحذف المستخدم.
* ملاحظة:* يجب أن يكون التقييد نشطًا.

 --------------------------------

* الخيار:* 👎 |  معاداة العرب
* الأمر:* ${usedPrefix + command} ضد العرب
* الوصف:* في حالة انضمام رقم عربي إلى المجموعة ، يقوم الروبوت بإزالته تلقائيًا.
* ملاحظة:* يجب أن يكون الترحيب والتقييد نشطًا.

 --------------------------------

* الخيار:* 👎 |  مكافحة العرب 2
* الأمر:* ${usedPrefix + command} antiarabes2
* الوصف:* في حالة كتابة رقم عربي في المجموعة ، يقوم الروبوت بحذفه تلقائيًا.
* ملاحظة:* يجب أن يكون التقييد نشطًا.

 --------------------------------

* الخيار:* 🤖 |  موديجاديبوت
* الأمر:* ${usedPrefix + command} modejadibot
* الوصف:* لتمكين أو تعطيل استخدام الأمر للروبوتات الفرعية ($ {usedPrefix} serbot / ${usedPrefix} jadibot).
* ملاحظة:* لا يمكن استخدام هذا الأمر إلا من قبل مالكي الروبوتات.

 --------------------------------

* الخيار:* 👑 |  وضع المشرف
* الأمر:* ${usedPrefix + command} وضع الإدارة
* الوصف:* لن يستجيب الروبوت إلا لمسؤولي المجموعة.

--------------------------------

** الخيار:* 😃 |  سيمسيمي
* الأمر:* simsimi ${usedPrefix + command}
* الوصف:* سيبدأ الروبوت في الرد على الرسائل باستخدام SimSimi's AI.

 --------------------------------

* الخيار:* ⏳ |  مكافحة البريد المزعج
*الأمر:* ${usedPrefix + command} ضد البريد العشوائي
* الوصف:* يكتشف الروبوت عندما يرسل المستخدم الأمر بالبريد الإلكتروني ويحظره لمدة 5 ثوان ويحذره.
* ملاحظة:* لا يمكن استخدام هذا الأمر إلا من قبل مالكي الروبوت..`trim()

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'detect2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect2 = isEnable
break    
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiporno = isEnable
break        
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break     
case 'antispam':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antispam = isEnable    
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
case 'antiarabes2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab2 = isEnable  
break    
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, { text: optionsFull }, { quoted: m })
throw false
}
conn.sendMessage(m.chat, { text: `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type}\n🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? 'ACTIVADO' : 'DESACTIVADO'}\n📣 𝐏𝐀𝐑𝐀: ${isAll ? 'ESTE BOT' : isUser ? '' : 'ESTE CHAT'}` }, { quoted: m })        
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
export default handler
