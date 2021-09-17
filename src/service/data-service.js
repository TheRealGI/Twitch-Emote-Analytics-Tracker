const dataRepository = require('../db/repository/data-repository');

async function saveData(userId, emoteId, count) {
    let exists = await dataRepository.getDataByUserIdAndEmoteId(userId, emoteId);
    if(exists.length > 0) {
        return await dataRepository.updateData(userId, emoteId, count);
    }
    return  await dataRepository.addData(userId, emoteId, count);
}

async function getTopEmotesByUserId(userId) {
    return await dataRepository.getTopThreeEmotesByUserId(userId);
}
  
  module.exports = {saveData, getTopEmotesByUserId};