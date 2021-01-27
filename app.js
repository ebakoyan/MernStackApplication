const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const config = require('./config/index.js')
const Story = require('./model/Story.js')
const Joi = require('joi')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('client/build'))
app.get('/api/stories', async(req, res) => {
    try {
        const story = await Story.find().sort({datefield: -1})
        
        res.json({story})
    } catch (e) {
        res
            .status(400)
            .json({message: e.message})
    }
})
const storySchema = {
    title: Joi
        .string()
        .min(6)
        .max(20)
        .required(),
    body: Joi
        .string()
        .min(10)
        .max(50)
        .required(),
    img: Joi
        .string()
        .uri()
        .max(200),
    creator: Joi
        .string()
        .min(5)
        .max(12)
        .required()
}
app.post('/api/stories', async(req, res) => {
    try {

        const validation = await Joi.validate(req.body, storySchema)

        let story = new Story({
            ...req.body
        })
        await story.save();
        res.json({message:'story created'})

    } catch (e) {
        res
            .status(202)
            .json({message: e.message})
    }
})
const mongoUri = config.mongoUri;
mongoose
    .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log("Mongoose connected"))
    .catch(e => console.log(e))

    const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at port ${PORT}`))