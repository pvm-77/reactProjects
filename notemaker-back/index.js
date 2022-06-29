const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(requestLogger)
app.use(express.static('build'))

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2022-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2022-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-05-30T19:20:14.298Z",
        important: true
    }
]
app.put('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    try {
        const note = notes.find(note => note.id === id)
        // change important 
        const changedNote = { ...note, important: !note.important }

        res.status(202).json(changedNote)

    } catch (error) {
        res.status(400).json(error)
    }
})
app.get('/api/notes', (req, res) => {
    try {
        console.log(notes);
        res.status(200).json(notes);

    } catch (error) {
        res.status(400).json(error);
    }
})

// // create a new note
// app.post('/api/notes', (request, response) => {
//     const note = request.body
//     console.log(note)
//     response.json(note)
//   })

// fetch single note by id
app.get('/api/notes/:id', (request, response) => {
    console.log(request.params.id)
    const id = Number(request.params.id)
    console.log(id)
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).json(
            { error: `Note with id ${id} not found` }
        )
    }
}
)
// insert single note to db
app.post('/api/addNote', (req, res) => {
    try {
        const note = req.body;
        console.log(note);
        res.status(201).json(note)
    } catch (error) {
        res.status(400).json(error)

    }

})



// middleware
const requestLogger = (req, res, next)=>{
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log('hello');
    console.log('yeah bro');
})