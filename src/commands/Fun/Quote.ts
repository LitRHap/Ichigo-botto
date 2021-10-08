import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'quote',
            description: 'random quote.',
            aliases: ['q'],
            category: 'fun',
            usage: `${client.config.prefix}quote`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
     const  MessageType.buttonsMessage  = (type === 'conversation') ? M.message.conversation : (type === 'buttonsMessage') ? M.message.extendedTextMessage.text : ''
     const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
     MessageType.buttonsMessage = command
        await axios
            .get(`https://api.quotable.io/random`)
            .then((response) => {
                // console.log(response);
                const text = `📝 *Content:* ${response.data.content}\n\n*✍️ Author:* ${response.data.author}`
                const buttonsk = [
    {buttonId: '${this.client.config.prefix}why', buttonText: {displayText: ':next'}, type: 1}]
                const buttonMessagek = {
      contentText: text
      footerText: 'Ichigo-botto',
      buttons: buttonsk,
      headerType:1
                }
                return void this.client.sendMessage(M.from,text,buttonsk,MessageType.buttonMessage,{quoted:M.WAMessage})
            })
            .catch((err) => {
                M.reply(`🔍 Error: ${err}`)
            })
    }
}
