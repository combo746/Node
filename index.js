const BOT = require("./handlers/Client")
const {'token'} = require("./settings/config")
const client = new BOT()

module.exports = client
client.start(TOKEN);

// for replit hosting
setInterval(()=>
{
  if(!client || !client.user)
  {
    process.kill(1)
  }
},10000)