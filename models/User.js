const { Schema, model } = require('mongoose');


const UserSchema = new Schema( 
    {
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
            match: /.+\@.+\..+/  //validates unique emails with mongoose
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: []
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);


UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);



module.exports = User;