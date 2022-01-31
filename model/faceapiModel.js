const mongoose = require('mongoose');
// const des = mongoose.Schema(
//     {descrip: { type: Array, required: true }}
// )
// const reviewSchema = mongoose.Schema(
//     {
//         discriptor:  { type: Array, required: true },
//     },
//     {
//         timestamps: true,
//     }
// )

const faceapiSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        reviews: { type: Array, required: true },
    },
    {
        timestamps: true,
    }
)

const Faceapi = mongoose.model('faceapi', faceapiSchema)

module.exports = Faceapi
