import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (args.length < 1) return reply(from, ':pick @_', {quoted:mek});
                      membr = []
                      txt=args.join(' ')
                      const mes = groupMembers
                      const msk = groupMembers
                      const siaps = mes[Math.floor(Math.random() * mes.length)]
                      const sips = pushname[Math.floor(Math.random() * msk.length)]
                      teks = `*${txt} in this group:* *@${siaps.jid.split('@')[0]}*`
                      membr.push(siaps.jid)
                      mentions(teks, membr, true)
                      break
                    
     }
