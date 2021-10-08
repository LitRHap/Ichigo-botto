import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'pick',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const args = body.trim().split(/ +/).slice(1)
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? return void this.client.sendMessage(M.from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : void this.client.sendMessage(M.from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}});
      }
        if (args.length < 1) return M.reply(M.from,':pick @_', {quoted:M.WAMessage});
                     var membr = []
                      var txt=args.join(' ')
                      const mes = groupMembers
                      const msk = groupMembers
                      const siaps = mes[Math.floor(Math.random() * mes.length)]
                      const sips = pushname[Math.floor(Math.random() * msk.length)]
                      teks = `*${txt} in this group:* *@${siaps.jid.split('@')[0]}*`
                      membr.push(siaps.jid)
                      mentions(teks, membr, true)
                     
                    
     }
}
