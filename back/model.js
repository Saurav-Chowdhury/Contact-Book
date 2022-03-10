const mongoose=require('mongoose');

const User=mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

module.exports=mongoose.model("Contacts",User);