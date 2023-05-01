        College.insertMany(college.collegeData)
            .then(() => {
                console.log('Thêm college thành công');
            })
            .catch(err => {
                console.log('Thêm college thất bại: ' + err);
            });