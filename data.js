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

let majorData = [
    {
        code: 1,
        name: 'Kỹ thuật phần mềm',
        college: 1
    },
    {
        code: 2,
        name: 'Mạng máy tính và truyền thông dữ liệu',
        college: 1
    },
    {
        code: 3,
        name: 'Kỹ thuật máy tính',
        college: 2
    },
    {
        code: 4,
        name: 'Kỹ thuật xây dựng',
        college: 2
    }
];

let subjectData = [
    {
        code: 1,
        name: 'Lập trình căn bản',
        credit_hours: 4,
        prerequisite: null
    },
    {
        code: 2,
        name: 'Lập trình hướng đối tượng',
        credit_hours: 3,
        prerequisite: 1
    },
    {
        code: 3,
        name: 'Lập trình .NET',
        credit_hours: 3,
        prerequisite: 2
    },
    {
        code: 4,
        name: 'Lập trình vi điều khiển',
        credit_hours: 3,
        prerequisite: 1
    },
    {
        code: 5,
        name: 'Lập trình Java',
        credit_hours: 3,
        prerequisite: 2
    }
];

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
    collegeData, majorData, studentData, subjectData
}