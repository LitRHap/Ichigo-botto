import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ping',
            description: 'Tags all users in group chat',
            aliases: ['ping'],
            category: 'general',
            usage: `${client.config.prefix}everyone`,
            adminOnly: true
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (await M.reply(
            `${M.groupMetadata?.subject}\n,
            undefined,
            undefined,
            M.groupMetadata?.participants.map((user) => user.jid)
        ).catch((reason: any) => M.reply(`an error occupered, Reason: ${reason}`)))
    }
}
