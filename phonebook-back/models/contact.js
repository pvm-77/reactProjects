const mongoose = require('mongoose')


const url = `mongodb+srv://root:root@learncluster.elcem.mongodb.net/phonebook?authSource=admin&replicaSet=atlas-14e3nl-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`
mongoose.connect(url)
    .then(result => {
        console.log('db connect')
    })
    .catch((error) => {
        console.log('error to db');
    }

    );

// schema for contact 
const contactSchema = new mongoose.Schema({
    name: {
        type:String
        
    },
    contactNumber: {
        type:Number
        
    }
})
contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
const Contact = mongoose.model('Contact', contactSchema)
module.exports=Contact