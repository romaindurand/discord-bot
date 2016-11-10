try {
  var config = require('./config')
} catch (ex) {
  console.log('Refer to the instructions in readme.md file to create a valid config.js')
  process.exit()
}
var Discord = require('discord.io')
var commands = require('./commands')
config.commandSymbol = config.commandSymbol || '/'
config.adminIDs = config.adminIDs || []

var bot = new Discord.Client({
  token: config.token,
  autorun: true
})

bot.on('ready', function () {
  console.log('Bot activated : ' + bot.username + ' - (' + bot.id + ')')
})

bot.on('message', function (user, userID, channelID, text, event) {
  var message = { user, userID, channelID, text, event }

  if (message.text.startsWith(config.commandSymbol)) {
    handleCommand(message)
    return
  }
})

function handleCommand (message) {
  var command = parseCommand(message.text)
  commands[command.name](bot, message, command.args)
}

function parseCommand (message) {
  var parsedCommand = message.split(' ')
  return {
    name: parsedCommand[0].replace(config.commandSymbol, ''),
    args: parsedCommand.slice(1)
  }
}
