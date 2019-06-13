const mongoose = require('mongoose')

const Player = new mongoose.Schema({
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    position: { type: String, default: '' },
    age: {
        type: Number,
        default: 0,
        min: 0,
        max: 99,
        required: [true, 'Why no age?']
    },
    team: {
        type: String,
        default: 'Dev',
        enum: ['Dev', 'HR', 'Admin',]
    },
    password: { type: String }
}, {
        timestamps: true
    })

module.exports = mongoose.model('Player', Player)