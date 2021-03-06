import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { IParsedArgs, ISimplifiedMessage } from '../../typings'

import axios from 'axios'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'google',

            aliases: ['g', 'search'],

            description: 'Search on the web ',

            category: 'general',

            dm: true,

            usage: `${client.config.prefix}google [query]`

        })

    }

    // static count = 0

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {

        // Adds mod check

        // if (!this.client.config.mods?.includes(M.sender.jid)) return void null

        if (!this.client.config.gkey) return void null

        if (!joined) return void M.reply('๐ Provide a search term')

        // if (Command.count > 75) return void M.reply('๐ Search limit reached')

        // Command.count += 1

        const term = joined.trim()

        await axios

            .get(

                `https://www.googleapis.com/customsearch/v1?q=${term}&key=${this.client.config.gkey}&cx=baf9bdb0c631236e5`

            )

            .then((res) => {

                // console.log(res);

                if (res.status !== 200) return void M.reply(`๐ Error: ${res.status}`)

                let result = ``

                let index = 1

                for (const item of res.data?.items) {

                    result += `*๐ฅ${index}.Title* : ${item.title}\n*๐Link* : ${item.link}\n*๐Snippet* : ${item.snippet}\n\n`

                    index++

                }

                // return void M.reply(`๐Command Used : ${Command.count} times\n Result for *${term}*\n\n\n ${result}`)

                return void this.client.sendMessage(M.from,`๐ Result for *${term}*\n\n\n ${result}`,MessageType.text,{quoted:M.WAMesssage,contextInfo: {
    externalAdReply: {
           title:`Google search-${term}`,
          body: `searched by Pratyush`,
         thumbnailUrl: `https://64.media.tumblr.com/1beaebc66d9be0d12231cb7e886855ad/e05ed8993097dd72-a6/s500x750/734cb50014b3280edc8bdcb15f42322edd55b067.jpg`,
        
    }
}})

            })

            .catch((err) => {

                M.reply(`๐ Error: ${err}`)

            })

    }

}
