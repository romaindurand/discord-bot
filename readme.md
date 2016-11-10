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
  token: 'app.bot.user.token',
  adminIDs: [
    'adminid1',
    'adminID2',
    ...
  ]
}
```

# Tests
## Run Tests
``npm test``
## Auto-fix Tests
``npm run fix``
