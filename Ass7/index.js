const joi = require('joi')
const express = require('express')
const mongoose = require('mongoose')
const { string, number } = require('joi')
const { response } = require('express')
const app = express()

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/movies', () => {
    console.log("DataBase Connected ")
})

const Mschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Movie Name is required']
    },
    date: {
        type: Number,
        required: [true, 'Movie Date is required']
    },
    poster: {
        type: String,
        required: [false]
    },
})
const Movies = mongoose.model('Movies', Mschema)

app.get('/api/movies', async (req, res) => {
    try {
        let movies = await Movies.find()
        res.status(200).send({ data: movies, message: 'Movies fetch successfully' })
    } catch (err) {
        res.status(400).send({ error: true, message: err.message })
    }
})

app.post('/api/movies', (req, res) => {
    console.log(req.body)
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message })
    const movie = new Movies({ name: req.body.name, date: req.body.date, poster: req.body.poster })
    movie.save()
        .then((response) => {
            res.status(201).send({ data: response, message: "Movie Saved Successfully" })
        })
})
app.put('/api/movies/:id', async (req, res) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message })
    console.log(req.params.id, req.body.name, req.body.date)
    try {
        const post = await Movies.findOne({ _id: req.params.id })
        post.name = req.body.name
        post.date = req.body.date
        post.poster = req.body.poster

        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Movie doesn't exist!" })
    }
})

app.patch('/api/movies/:id', async (req, res) => {

    try {
        const post = await Movies.findOne({ _id: req.params.id })

        if (req.body.name) {
            post.name = req.body.name
        }
        if (req.body.date) {
            post.date = req.body.date
        }
        if (req.body.poster) {
            post.poster = req.body.poster
        }

        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Movie doesn't exist!" })
    }
})

app.delete('/api/movies/:id', async (req, res) => {
    try {
        await Movies.deleteOne({ _id: req.params.id })
        res.status(204).send({ message: 'Movies deleted successfully' })
    } catch {
        res.status(404)
        res.send({ error: "Moviedoesn't exist!" })
    }
})

app.get('/api/movies/:_id', (req, res) => {
    console.log(req.params)
    console.log(req.query)

    Movies.findById(req.params._id)
        .then(response => {
            res.status(200).send({ data: response, message: 'Movie Fetched Succesfully' })
        })
        .catch(error => {
            res.status(404).send({ error: true, message: 'The Movie with this id does not exist' })
        })
})
app.get('/api/movies/name/:name', (req, res) => {
    console.log(req.params)
    console.log(req.query)

    Movies.findOne({ name: req.params.name })
        .then(response => {
            res.status(200).send({ data: response, message: 'Movie Fetched Succesfully' })
        })
        .catch(error => {
            res.status(404).send({ error: true, message: 'The Movie with this Name does not exist' })
        })
})
app.get('/api/movies/date/:date', (req, res) => {
    console.log(req.params)
    console.log(req.query)

    Movies.find({ date: req.params.date })
        .then(response => {
            res.status(200).send({ data: response, message: 'Movies Fetched Succesfully' })
        })
        .catch(error => {
            res.status(404).send({ error: true, message: 'The Movies with this date do not exist' })
        })
})


const schema = joi.object({
    name: joi.string().min(2).required(),
    date: joi.number().required(),
    poster: joi.string()
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server listening at port ${port}...`));