const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    code: {
        type: Number,
        unique: true,
    },
    name: String
})

let Colleges = new mongoose.model('College', collegeSchema);

function insertData(code, name) {
    let tempCollege = {
        code: code,
        name: name
    };

    Colleges.create(tempCollege).then(() => console.log(`Thêm khoa ${name} thành công!`)).catch(`Thêm khoa ${name} thất bại`);
}

function findIDbyCode(code) {
    return Colleges.findOne({ code: code }, '_id').then(data => data._id.toString()).catch(err => null)
}

module.exports = {
    Colleges, insertData, findIDbyCode
}

