import express from "express"
import cors from "cors"
import {films} from "./datas.js";
import dotenv from "dotenv"
import {starwars} from "./starwars.js"

dotenv.config({path: ".env"})

const app = express()

app.use(express.json())

const whitelist = [process.env.FRONT_URL]

app.use(cors({
    origin : "*"
}))

app.get("/video", (req, res) => {
    res.status(200).json(films)
})

app.get("/video/:id", (req, res) => {
    const film = films.find(film => film.id.toString() === req.params.id)

    res.status(200).send(film)
})

app.get("/characters", (req, res) => {
    res.status(200).send(starwars)
})

app.get("/characters/:id", (req, res) => {
    res.status(200).send(starwars.find(char => char.id.toString() === req.params.id.toString()))
})

app.listen(process.env.PORT, () => {

    console.log("listening")
})