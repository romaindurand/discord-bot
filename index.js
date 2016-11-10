var Discord = require('discord.io')
var config = require('./config')
var commands = require('./commands')
var bot = new Discord.Client({
  token: config.token,
  autorun: true
})

bot.on('ready', function () {
  console.log('Bot activated : ' + bot.username + ' - (' + bot.id + ')')
})

bot.on('message', function (user, userID, channelID, text, event) {
  var message = { user, userID, channelID, text, event }

  if (message.text.startsWith('/')) {
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
    name: parsedCommand[0].replace('/', ''),
    args: parsedCommand.slice(1)
  }
}
