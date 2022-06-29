const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

// console.log('connecting to', url);
mongoose.connect(url, { useNewUrlParser: true })
    .then(result => {
        console.log('connected to MongoDB');

    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message);
    });



const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true

    },
    important: {
        type: Boolean,
        default: false

    }
},
    { timestamps: true }
)
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Task;



