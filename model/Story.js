const {Schema, model} = require("mongoose")

const schema = new Schema({
    title: {
        type: String,
        requaired: true
    },
    body: {
        type: String,
        requaired: true
    },
    img: {
        type: String,
        requaired: true,
        default: "https://cdn.britannica.com/s:700x500/85/133085-050-FF7058E4/Yerevan-peaks-Arm-ba" +
                "ckground-Mount-Ararat.jpg"
    },
    creator: {
        type: String,
        requaired: true
    }
})
const Story = model('Story', schema)
module.exports = Story