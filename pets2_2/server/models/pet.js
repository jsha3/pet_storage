const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: {type: String, minlength: [3, 'Name must be 3 characters or longer, mate!']},
    type: {type: String, minlength: [3, 'What kind of animal is it?  At least 3 characters long.']},
    description: {type: String, minlength: [3, 'Describe the animal.  At least 3 characters long, please.']},
    skill1: {type: String, required: false},
    skill2: {type: String, required: false},
    skill3: {type: String, required: false}
}, {timestamps: true})

mongoose.model('Pet', PetSchema);