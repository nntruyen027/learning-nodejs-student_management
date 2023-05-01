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
        type: mongoose.Schema.Types.Number,
        ref: 'Subject',
        default: null,
    }
})

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

module.exports = {
    subjectData, subjectSchema
}
