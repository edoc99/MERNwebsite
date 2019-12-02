const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
    }
});

// encrypting the password before saving to the database
userSchema.pre('save', async function (next) {
   try {
    if (!this.isModified('password')) {
        return next();
    }

    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
    return next();
   } catch (err) {
       return next(err)
   }
});

//compairing password
userSchema.methods.comparePassword = async function(attempt, next){
    try {
        return await bcrypt.compare(attempt, this.password);
    } catch(err) {
        next(err);
    }
}

module.exports = mongoose.model('User', userSchema);