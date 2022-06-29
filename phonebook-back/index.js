const express = require('express');
const mongoose = require('mongoose');
const Contact = require('./models/contact');
const cors=require('cors')
// const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const url = `mongodb+srv://root:root@learncluster.elcem.mongodb.net/phonebook?authSource=admin&replicaSet=atlas-14e3nl-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`
const contactSchema = new mongoose.Schema({
    name: String,
    contactNumber: Number
}, {

})


app.post('/api/addContact', (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        contactNumber: req.body.contactNumber
    })

    try {

        contact.save().then(
            saveContact => {
                res.status(200).json(saveContact)
            }
        ).catch(
            (e) => {
                console.log('wrong')
            }
        )




    } catch (error) {
        res.status(400).json(error)
    }
})
app.get('/api/contacts', (req, res) => {
    const allContacts = Contact.find({}).then(
        (getcontacts) => {
            res.status(200).send(getcontacts)

        }
    ).catch(
        (error) => {
            res.status(400).json(error)
        }
    )
})
app.delete('/api/deleteContact/:id', (req, res) => {
    const id = req.params.id
    // console.log(id);
    Contact.findByIdAndDelete(id).then(response => {
        res.status(200).json(response)
    }

    ).catch(
        (error) => {
            res.status(404).json(error)
        }

    )



})
app.listen('3001', () => {
    console.log(` server is runningon port 3001`);
})