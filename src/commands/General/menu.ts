import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
         

        })
    }



    run = async (M: ISimplifiedMessage): Promise<void> => {




return void M.reply(wait this.GIFBufferToVideoBuffer(
                await this.client.getBuffer('https://c.tenor.com/LtTgb4O_hjMAAAAC/darling-in-the-franxx-anime.gif' )
            ),
            MessageType.video,
            Mimetype.gif,
             `Did you mean help`)
