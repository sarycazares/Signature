const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({

    num_token:{
        type: String,
        required: true,
    },

    usuario:[{
        type: String,
        usuario: {type: mongoose.Types.ObjectId, ref:"usuario"}
    }
    ],

});

const Token = mongoose.model("token", TokenSchema);
module.exports = Token;