const mongoose = require('mongoose');
const college = require('./College.js');
const major = require('./Major.js');
const subject = require('./Subject.js');
const student = require('./Student.js');
const data = require('./data.js')

mongoose.connect('mongodb://localhost:27017/StudentManagement',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log('Kết nối thành công!');
}).catch(err => {
    console.log('Kết nối thất bại: ' + err);
})

// college.insertData('1', 'Công nghệ thông tin và truyền thông');

// major.insertData(1, 'Kỹ thuật phần mềm', 1);

// data.collegeData.forEach(collegeItem => {
//     college.insertData(collegeItem.code, collegeItem.name);
// })

// data.majorData.forEach(majorItem => {
//     major.insertData(majorItem.code, majorItem.name, majorItem.college)
// })

// data.subjectData.forEach(subjectItem => {
//     subject.insertData(subjectItem.code, subjectItem.name, subjectItem.credit_hours, subjectItem.prerequisite)
// })

// data.studentData.forEach(studentItem => {
//     student.insertData(studentItem.code, studentItem.name, studentItem.course, studentItem.age, studentItem.major)
// })

// data.studentData.forEach(studentItem => {
//     studentItem.subjects.forEach(subjectItem => {
//         student.enteredGrade(studentItem.code, subjectItem.subject, subjectItem.grade);
//     })
// })


// student.enteredGrade(1, 1, 4);

student.Students.find({}, '-_id -subjects._id').populate('major', 'name -_id').populate('subjects.subject', 'name -_id').then(data => {
    data.forEach(element => {
        console.log(`Thông tin tích lũy của sinh viên ${element.name.lastname}: `);
        console.log(element.subjects)
    });
})