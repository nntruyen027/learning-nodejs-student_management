const mongoose = require('mongoose');
const major = require('./Major.js');
const subject = require('./Subject.js');

const studentSchema = new mongoose.Schema({
    code: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        firstname: String,
        lastname: String
    },
    course: Number,
    age: Number,
    major: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Major',
        required: true
    },
    subjects: [{
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            unique: true,
            ref: 'Subject'
        },
        grade: {
            type: Number
        }
    }]
});

let Students = new mongoose.model('Student', studentSchema);

function insertData(code, name, course, age, majorCode) {
    major.findIDbyCode(majorCode)
        .then(id => {
            let studentTemp = {
                code: code,
                name: {
                    firstname: name.firstname,
                    lastname: name.lastname
                },
                course: course,
                age: age,
                major: id,
                subjects: []
            }

            Students.create(studentTemp)
                .then(() => console.log(`Thêm sinh viên ${name.lastname} thành công`))
                .catch((err) => console.log(`Thêm sinh viên ${name.lastname} thất bại: ${err}`))
        })
}

function findIDbyCode(code) {
    return Students.findOne({ code: code }, '_id').then(data => data._id.toString()).catch(err => null)
}

function enteredGrade(code, subjectcode, grade) {
    subject.findIDbyCode(subjectcode).then(id => {
        Students.findOne({ code: code }).then(student => {
            student.subjects.push(
                { subject: id, grade: grade }
            )

            return student.save();
        })
            .then(() => console.log(`Thêm điểm học phần ${subjectcode} cho sinh viên ${code} thành công`))
            .catch(err => console.error(`Thêm điểm thất bại ${err}`));
    })
}

module.exports = {
    Students, insertData, findIDbyCode, enteredGrade
}

