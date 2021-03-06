const contextHelper = require('../../util/contextHelper')
module.exports = {
  name: 'help',
  needsArgs: false,
  timeout: 60,
  async execute(client, channel, context, message) {
    client.say(channel, `@${contextHelper.getDisplayName(context)} --> read the documentation on GitHub: https://github.com/TheRealGI/BTTV-Analytics-Tracker#readme`);
    return true;
  }
}