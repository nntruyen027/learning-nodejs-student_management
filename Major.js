const mongoose = require('mongoose');

const majorSchema = new mongoose.Schema({
    code: {
        type: Number,
        unique: true,
        required: true
    },
    name: String,
    college: {
        type: mongoose.Schema.Types.Number,
        ref: 'College',
        required: true
    }
});

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

module.exports = {
    majorData,
    majorSchema
}