import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/ichi/ichigo.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        const mn=`
🪆Konichiwa! *${M.sender.username}* , I'm *Ichigo-botto*

*Enjoy using my commands....*

📜Here are the listed commands : -

🎊 *FUN* 🎊

🔖 ғᴀᴄᴛ  
🔖 ǫᴜᴏᴛᴇ
🔖 ғǫᴜᴏᴛᴇ      
🔖 ᴡʜʏ
🔖 ᴊᴏᴋᴇ        
🔖 ᴛʀɪɢɢᴇʀ

⛩️ *WEEB* ⛩️

🏷️ᴡᴀɪғᴜ            
🏷️ ɴᴇᴋᴏ
🏷️ ᴀɴɪᴍᴇ-ʟɪɴᴇ      
🏷️ ʟᴏʟɪ
🏷️ ʀᴘᴀᴘᴇʀ          
🏷️ ᴋɪᴛsᴜɴᴇ
🏷️ ᴍᴇɢᴜᴍɪᴘᴀᴘᴇʀ
🏷️ ʜᴜsʙᴀɴᴅʀᴏ
🏷️ sʜɪɴᴏʙᴜ-ᴘᴀᴘᴇʀ

🎐 *GENERAL* 🎐

🔷 ᴀᴅᴍɪɴs         
🔷 ᴅᴇʟᴇᴛᴇ
🔷 ᴇᴠᴇʀʏᴏɴᴇ       
🔷 ᴍᴏᴅs
🔷 ᴘʀᴏғɪʟᴇ        
🔷 xᴘ

🎼 *MEDIA* 🎼

🎶 ʟʏʀɪᴄs      
🎶 sᴘᴏᴛɪғʏ
🎶 ʏᴛᴀ         
🎶 ʏᴛᴠ
🎶 ʏᴛs         
🎶 ᴘʟᴀʏ
🎶 ᴘʟᴀʏᴠ

📃 *MISC* 📃

⛓️ ʜɪ          
⛓️ ʀᴇᴛʀɪᴇᴠᴇ
⛓️ ᴠᴏɪᴅ      

📯 *MODERATION* 📯

📍ᴀᴄᴛɪᴠᴀᴛᴇ     
📍ᴄʟᴏsᴇ
📍ᴅᴇᴀᴄᴛɪᴠᴀᴛᴇ   
📍ᴏᴘᴇɴ
📍ᴅᴇᴍᴏᴛᴇ        
📍ᴘᴜʀɢᴇ
📍ᴘʀᴏᴍᴏᴛᴇ       
📍ʀᴇᴍᴏᴠᴇ

⚠️ *NSFW* ⚠️

🀄 ʙʟᴏᴡᴊᴏʙ    
🀄 ɴsғᴡᴊᴏᴋᴇ
🀄 ɴsғᴡ-ɴᴇᴋᴏ  
🀄 ᴛʀᴀᴘ
🀄 ɴsғᴡ-ᴡᴀɪғᴜ

🎭 *REACTIONS* 🎭

🎗️ ʙɪᴛᴇ        
🎗️ ʜɪɢʜғɪᴠᴇ
🎗️ ʙʟᴜsʜ       
🎗️ sᴍᴜɢ
🎗️ ʙᴏɴᴋ        
🎗️ ʜᴜɢ
🎗️ ʙᴜʟʟʏ       
🎗️ ᴋɪᴄᴋ
🎗️ ᴄʀɪɴɢᴇ      
🎗️ ᴋɪʟʟ
🎗️ ᴄʀʏ         
🎗️ ᴋɪss
🎗️ ᴄᴜᴅᴅʟᴇ      
🎗️ ʟɪᴄᴋ
🎗️ ᴅᴀɴᴄᴇ       
🎗️ ᴘᴀᴛ
🎗️ ᴇᴀᴛ         
🎗️ ᴘᴏᴋᴇ
🎗️ ʜᴀɴᴅʜᴏʟᴅ    
🎗️ sʟᴀᴘ
🎗️ ʜᴀᴘᴘʏ       
🎗️ sᴍɪʟᴇ
🎗️ ᴜʟᴛʀᴀʜᴜɢ    
🎗️ ᴡᴀᴠᴇ
🎗️ ᴡɪɴᴋ        
🎗️ ʏᴇᴇᴛ

🪦 *UTILS* 🪦

⏳ ʙʟᴜʀ    
⏳ sᴛɪᴄᴋᴇʀ
⏳ sᴛᴇᴀʟ   
⏳ sᴜʙʀᴇᴅ

📧 *NOTE*  📧

Use =help <command_name> to view the command info
 

𝐈𝐜𝐡𝐢𝐠𝐨-𝐁𝐨𝐭𝐭𝐨©~MarSH
`
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
