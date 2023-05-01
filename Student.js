const mongoose = require('mongoose');

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
        type: mongoose.Schema.Types.Number,
        ref: 'Major',
        required: true
    },
    subjects: [{
        subject: {
            type: Number,
            ref: 'Subject'
        },
        grade: {
            type: Number
        }
    }]
});

let studentData = [
    {
        code: 1,
        name: {
            firstname: 'Nguyễn Ngọc',
            lastname: 'Truyện'
        },
        course: 46,
        age: 21,
        major: 1,
        subjects: [
            {
                subject: 1,
                grade: 4
            },
            {
                subject: 2,
                grade: 3.5
            },
            {
                subject: 3,
                grade: 4
            }
        ]
    },
    {
        code: 2,
        name: {
            firstname: 'Đỗ Kỳ',
            lastname: 'Duyên'
        },
        course: 46,
        age: 21,
        major: 1,
        subjects: [
            {
                subject: 1,
                grade: 4
            },
            {
                subject: 2,
                grade: 3.5
            },
            {
                subject: 5,
                grade: 3.5
            }
        ]
    },
    {
        code: 3,
        name: {
            firstname: 'Nguyễn Phúc Nguyên',
            lastname: 'Khoa'
        },
        course: 47,
        age: 20,
        major: 1,
        subjects: [
            {
                subject: 1,
                grade: 3.5
            },
            {
                subject: 2,
                grade: 3
            },
        ]
    },
    {
        code: 4,
        name: {
            firstname: 'Bạch Toàn',
            lastname: 'Mỹ'
        },
        course: 46,
        age: 21,
        major: 2,
        subjects: [
            {
                subject: 1,
                grade: 3.5
            },
            {
                subject: 2,
                grade: 3
            },
        ]
    },
    {
        code: 5,
        name: {
            firstname: 'Đặng Minh',
            lastname: 'Nhựt'
        },
        course: 47,
        age: 20,
        major: 3,
        subjects: [
            {
                subject: 1,
                grade: 3
            },
            {
                subject: 2,
                grade: 3
            },
            {
                subject: 4,
                grade: 3
            }
        ]
    },
    {
        code: 6,
        name: {
            firstname: 'Lê Nguyễn Anh',
            lastname: 'Tuấn'
        },
        course: 47,
        age: 20,
        major: 4,
        subjects: []
    },
];

module.exports = {
    studentData, studentSchema
}

