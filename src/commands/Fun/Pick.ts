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
           var arg=args.join(' ');
            const pi= groupMetadata?.participants.map(user)
            const pic=pi.math.random(
        return void (await M.reply(
            `${M.groupMetadata?.subject || 'EVERYONE'}\n*[TAGS HIDDEN]*`,
            undefined,
            undefined,
            M.groupMetadata?.participants.map((user) => user.jid)
        ).catch((reason: any) => M.reply(`an error occupered, Reason: ${reason}`)))
    }
}
