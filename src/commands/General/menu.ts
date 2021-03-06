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
            './assets/images/ichi/ichigo2.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        const mn=`
ðªKonichiwa! *${M.sender.username}* , I'm *Ichigo-botto*

*Enjoy using my commands....*

ðHere are the listed commands : -

ð *FUN* ð

ð Òá´á´á´  
ð Ç«á´á´á´á´
ð ÒÇ«á´á´á´á´      
ð á´¡ÊÊ
ð á´á´á´á´        
ð á´ÊÉªÉ¢É¢á´Ê

â©ï¸ *WEEB* â©ï¸

ð·ï¸á´¡á´ÉªÒá´            
ð·ï¸ É´á´á´á´
ð·ï¸ á´É´Éªá´á´-ÊÉªÉ´á´      
ð·ï¸ Êá´ÊÉª
ð·ï¸ Êá´á´á´á´Ê          
ð·ï¸ á´Éªá´sá´É´á´
ð·ï¸ á´á´É¢á´á´Éªá´á´á´á´Ê
ð·ï¸ Êá´sÊá´É´á´Êá´
ð·ï¸ sÊÉªÉ´á´Êá´-á´á´á´á´Ê

ð *GENERAL* ð

ð· á´á´á´ÉªÉ´s         
ð· á´á´Êá´á´á´
ð· á´á´ á´ÊÊá´É´á´       
ð· á´á´á´s
ð· á´Êá´ÒÉªÊá´        
ð· xá´

ð¼ *MEDIA* ð¼

ð¶ ÊÊÊÉªá´s      
ð¶ sá´á´á´ÉªÒÊ
ð¶ Êá´á´         
ð¶ Êá´á´ 
ð¶ Êá´s         
ð¶ á´Êá´Ê
ð¶ á´Êá´Êá´ 

ð *MISC* ð

âï¸ ÊÉª          
âï¸ Êá´á´ÊÉªá´á´ á´
      

ð¯ *MODERATION* ð¯

ðá´á´á´Éªá´ á´á´á´     
ðá´Êá´sá´
ðá´á´á´á´á´Éªá´ á´á´á´   
ðá´á´á´É´
ðá´á´á´á´á´á´        
ðá´á´ÊÉ¢á´
ðá´Êá´á´á´á´á´       
ðÊá´á´á´á´ á´

â ï¸ *NSFW* â ï¸

ð ÊÊá´á´¡á´á´Ê    
ð É´sÒá´¡á´á´á´á´
ð É´sÒá´¡-É´á´á´á´  
ð á´Êá´á´
ð É´sÒá´¡-á´¡á´ÉªÒá´

ð­ *REACTIONS* ð­

ðï¸ ÊÉªá´á´        
ðï¸ ÊÉªÉ¢ÊÒÉªá´ á´
ðï¸ ÊÊá´sÊ       
ðï¸ sá´á´É¢
ðï¸ Êá´É´á´        
ðï¸ Êá´É¢
ðï¸ Êá´ÊÊÊ       
ðï¸ á´Éªá´á´
ðï¸ á´ÊÉªÉ´É¢á´      
ðï¸ á´ÉªÊÊ
ðï¸ á´ÊÊ         
ðï¸ á´Éªss
ðï¸ á´á´á´á´Êá´      
ðï¸ ÊÉªá´á´
ðï¸ á´á´É´á´á´       
ðï¸ á´á´á´
ðï¸ á´á´á´         
ðï¸ á´á´á´á´
ðï¸ Êá´É´á´Êá´Êá´    
ðï¸ sÊá´á´
ðï¸ Êá´á´á´Ê       
ðï¸ sá´ÉªÊá´
ðï¸ á´Êá´Êá´Êá´É¢    
ðï¸ á´¡á´á´ á´
ðï¸ á´¡ÉªÉ´á´        
ðï¸ Êá´á´á´

ðª¦ *UTILS* ðª¦

â³ ÊÊá´Ê    
â³ sá´Éªá´á´á´Ê
â³ sá´á´á´Ê   
â³ sá´ÊÊá´á´


 

ððð¡ð¢ð ð¨-ðð¨ð­ð­ð¨Â©
`
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption:mn }
        )
    }
}
