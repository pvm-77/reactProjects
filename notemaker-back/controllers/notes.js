const notesRouter = require('express').Router();
const Note = require('../models/note')
// get all notes
notesRouter.get('/', async (req, res) => {
    try {
        const notes = await Note.find({})
        console.log(notes)
        res.status(200).json(notes)
    } catch (error) {
        next(error)

    }
})

// get a single note  from db
notesRouter.get('/:id', async (request, response) => {
    const id = request.params.id;
    try {
        const note = await Note.findById(id)
        console.log(note)
        response.status(200).json(note)

    } catch (error) {
        next(error)

    }

})

// add a note
// noteRouter.post()

// delete a note
// noteRouter.delete()

// // update a note
// noteRouter.patch()




module.exports = notesRouter