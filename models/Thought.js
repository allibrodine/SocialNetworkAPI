const { Schema, model, Types } = require('mongoose');
//import Day.js for date formatting
const dayjs = require('dayjs');

const ReactionSchema = new Schema({
    reactionId: {
        //set custom id for reaction
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //getter to format date
        get: createdAtVal => dayjs(createdAtVal).format('MM/DD/YYYY hh:mm')
    }
})

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //getter to format date
        get: createdAtVal => dayjs(createdAtVal).format('MM/DD/YYYY hh:mm')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

//virtual to retrieve the number of reactions a thought has
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

//create Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;