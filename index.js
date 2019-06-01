const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NTU5MDIwNzcwMDYwMjcxNjYw.XPIRxg.12jBlrJe3wW6eYwKtieCqGyLf88';

const PREFIX = '&';

bot.on('ready', () =>{
    console.log('what the f');
})



bot.on('message', message=> {
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong')
        break;
            
       
    }
})

bot.login(token);

