const { Chatroom, User } = require('../models')
const { Op } = require('sequelize');
const { set } = require('express/lib/application');

async function structureChat(req) {
    const chatrooms = await Chatroom.findAll( { where: { [Op.or]: [{user_id1: req.session.user_id},{user_id2: req.session.user_id}] }})
    const chatroomsData = chatrooms.map(chatroom => chatroom.get({ plain: true }))
    var matches = [];

    for (chat of chatroomsData) {
        if (req.session.user_id === chat.user_id1) {
            const otheruser = await User.findByPk(chat.user_id2);
            chat.username = req.session.username;
            chat.othername = otheruser.username;
        } else if (req.session.user_id === chat.user_id2) {
            const otheruser = await User.findByPk(chat.user_id1);
            chat.username = req.session.username;
            chat.othername = otheruser.username;
            [chat.user_id2, chat.user_id1] = [chat.user_id1, chat.user_id2];
        }
        let exists = false;
        for (let set of matches) {
            if (set.user_id2 === chat.user_id2) {
                exists = true
            }
        }
        if (exists) { continue; } else {
            matches.push(chat)
        }
    }

    return matches
}

module.exports = structureChat;