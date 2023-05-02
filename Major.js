const mongoose = require('mongoose');
const college = require('./College.js');

const majorSchema = new mongoose.Schema({
    code: {
        type: Number,
        unique: true,
        required: true
    },
    name: String,
    college: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'College',
        required: true
    }
});

let Majors = new mongoose.model('Major', majorSchema);

function insertData(code, name, collegeCode) {
    college.findIDbyCode(collegeCode).then(id => {
        let majorTemp = {
            code: code,
            name: name,
            college: id
        }

        Majors.create(majorTemp)
            .then(() => console.log(`Thêm ngành ${name} thành công`))
            .catch((err) => console.log(`Thêm ngành ${name} thất bại`))
    })
}

function findIDbyCode(code) {
    return Majors.findOne({ code: code }, '_id').then(data => data._id.toString()).catch(err => null)
}

module.exports = {
    Majors,
    insertData,
    findIDbyCode
}