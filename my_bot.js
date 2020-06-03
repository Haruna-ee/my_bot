const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () =>{
   
   
        console.log("Connected as " + client.user.tag)
    // client.user.setActivity("with Javascript")
    client.user.setActivity("YouTube", {type: "WATCHING"})

})

client.login("NzE3NzQxNTc3NDk3NDc3MTQx.XtevKg.Y_9nURfW2pyoTTFHZXDxwGh0UII")