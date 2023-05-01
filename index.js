const mongoose = require('mongoose');
const college = require('./College.js');
const major = require('./Major.js');
const subject = require('./Subject.js');
const student = require('./Student.js');

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

//Thêm dữ liệu
const College = new mongoose.model('College', college.collegeSchema);
const Major = new mongoose.model('Major', major.majorSchema);
const Subject = new mongoose.model('Subject', subject.subjectSchema);
const Student = new mongoose.model('Student', student.studentSchema);

College.insertMany(college.collegeData)
    .then(() => {
        console.log('Thêm college thành công');
    })
    .catch(err => {
        console.log('Thêm college thất bại: ' + err);
    });

Major.insertMany(major.majorData)
    .then(() => {
        console.log('Thêm major thành công');
    })
    .catch(err => {
        console.log('Thêm major thất bại: ' + err);
    })

Subject.insertMany(subject.subjectData)
    .then(() => {
        console.log('Thêm subject thành công');
    })
    .catch(err => {
        console.log('Thêm subject thất bại: ' + err);
    })

Student.insertMany(student.studentData)
    .then(() => {
        console.log('Thêm student thành công');
    })
    .catch(err => {
        console.log('Thêm student thất bại: ' + err);
    })

//Truy vấn dữ liệu
Student.find({ code: 1 }, 'name').then(student => {
    console.log(`Sinh viên ${student}`);
}).catch(err => {
    console.error(err);
})

