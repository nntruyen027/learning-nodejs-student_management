const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    code: {
        type: Number,
        unique: true,
        required: true
    },
    name: String
})

let collegeData = [
    {
        code: 1,
        name: 'Công nghệ thông tin và truyền thông'
    },
    {
        code: 2,
        name: 'Bách khoa'
    },
];

module.exports = {
    collegeSchema, collegeData
}

