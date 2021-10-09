import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'pick',
            description: 'Tags all users in group chat',
            aliases: ['tag'],
            category: 'fun',
            usage: `${client.config.prefix}everyone`,
            adminOnly: true
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
           if(!joined) return M.reply('What do you want to pick')
           const term = joined.trim()
            const pi= M.groupMetadata?.participants.map(user)
            ]
        let chitoge = pi[Math.floor(Math.random() * pi.length)]
        const capt=`${term}: ${chitoge}`
        return M.reply(capt).catch((reason: any) => M.reply(`an error occupered, Reason: ${reason}`)))
    }
}
