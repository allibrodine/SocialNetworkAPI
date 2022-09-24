const { Schema, model } = require('mongoose');
// require npm validator package to validate e-mail address
const validatorPackage = require('validator');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validatorPackage.isEmail,
            message: 'Please provide a valid e-mail.'
        }
    },
    thoughts: [
        {
             type: Schema.Types.ObjectId,
             ref: 'Thought'
         }
     ],
    //  friends: [
    //      {
    //          type: Schema.Types.ObjectId,
    //          ref: 'User'
    //      }
    //  ]
     },
     {
         toJSON: {
             virtuals: true
         },
         id: false
    }
);

//virtual to retireve the number of friends a user has
// UserSchema.virtual('friendCount').get(function() {
//     return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
// });

//create User model using the UserSchema
const User = model('User', UserSchema);

//export the User model
module.exports = User;