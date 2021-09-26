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




return void M.reply(await request.buffer('https://www.pngarea.com/pngm/88/6947367_ichigo-png-ichigo-darling-in-the-franxx-png.png'),
MessageType.image,
            undefined,
            undefined,
           `*Did you mean : €help*`


)


    }







}
