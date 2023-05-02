const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    code: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        require: true
    },
    credit_hours: {
        type: Number,
        require: true
    },
    prerequisite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        default: null,
    }
})

let Subjects = mongoose.model('Subject', subjectSchema);

function insertData(code, name, credit_hours, prerequisiteCode) {
    findIDbyCode(prerequisiteCode).then(id => {
        let subjectTemp = {
            code: code,
            name: name,
            credit_hours: credit_hours,
            prerequisite: id
        }

        Subjects.create(subjectTemp)
            .then(() => console.log(`Thêm môn ${name} thành công`))
            .catch((err) => console.err(`Thêm môn ${name} thất bại: ${err}`))
    })
}

function findIDbyCode(code) {
    return Subjects.findOne({ code: code }, '_id').then(data => data._id.toString()).catch(err => null)
}

module.exports = {
    Subjects, insertData, findIDbyCode
}
