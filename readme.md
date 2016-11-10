# Requirements
- [Node.js v6+](https://nodejs.org/en/download/)
- npm (bundled with Node.js)
- git ([Windows installer](https://git-scm.com/download/win))


# Install
``git clone https://github.com/romaindurand/discord-bot``

``cd discord-bot``

``npm i``

# Run
``npm start``

Before, you have to create a ``./config.js`` file following this template : 

```javascript
module.exports = {
  // your bot token
  // required
  token: 'app.bot.user.token',

  // userIDs allowed to execute admin level commands
  // optional, default: []
  adminIDs: [
    'adminid1',
    'adminID2',
    ...
  ],
  // customize the symbol which triggers special commands
  // optional, default: '/'
  commandSymbol: '/'
}
```

# Tests
## Run Tests
``npm test``
## Auto-fix Tests
``npm run fix``
