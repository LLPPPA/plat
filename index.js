const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NTU5MDIwNzcwMDYwMjcxNjYw.XPIRxg.12jBlrJe3wW6eYwKtieCqGyLf88';

const PREFIX = '&';

bot.on('ready', () =>{
    console.log('what the f');
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`歡迎加入惠惠教! ${member}`)



});

bot.on('message', message=> {
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'explosion':
            const attachment = new Attachment('https://i.ytimg.com/vi/O4tbOvKwZUw/maxresdefault.jpg')
            message.channel.send(message.author, attachment)
        break;      
    }
})

bot.login(token);


