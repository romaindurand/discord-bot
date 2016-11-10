var config = require('./config')

module.exports = {
  purge: function (bot, message, args) {
    if (!isAdmin(message.userID)) {
      return
    }
    bot.getMessages({
      channelID: message.channelID,
      limit: 100
    }, function (err, results) {
      if (err) {
        console.log(err)
      }
      var messageIDs = results.map(function (message) {
        return message.id
      })
      bot.deleteMessages({
        channelID: message.channelID,
        messageIDs: messageIDs
      }, function (error, response) {
        console.log(error, response)
      })
    })
  }
}

function isAdmin (userID) {
  return config.adminIDs.find((id) => userID === id)
}
