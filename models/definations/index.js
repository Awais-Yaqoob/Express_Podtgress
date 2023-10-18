let sequelize = require('../../common/dbConnection');
const user = require('./users/users');
const student = require('./users/students')
const teacher = require('./users/teachers')
const course = require('./users/courses')


// relation btw user & student
user.hasOne(student, {
    onDelete: "CASCADE",
    foreignKey: { name: "userID", allowNull: false, unique: true },
  });
  student.belongsTo(user, {
    onDelete: "CASCADE",
    foreignKey: { name: "userID", allowNull: false, unique: true },
  });
  
//   //relation btw user & teacher
  user.hasOne(teacher, {
    onDelete: "CASCADE",
    foreignKey: { name: "userID", allowNull: false, unique: true },
  });
  teacher.belongsTo(user, {
    onDelete: "CASCADE",
    foreignKey: { name: "userID", allowNull: false, unique: true },
  });
  
//   // many-to-many btw course and teacher
  teacher.belongsToMany(course, {
    onDelete: "CASCADE",
    through: "TeacherCourse",
    as: "Course",
    foreignKey: { name: "teacherID", allowNull: false },
  });
  
  course.belongsToMany(teacher, {
    onDelete: "CASCADE",
    through: "TeacherCourse",
    as: "Teacher",
    foreignKey: { name: "courseID", allowNull: false },
  });
const models = sequelize.models;
 console.log(models);
const db = {}
db.sequelize = sequelize;
module.exports = {db, models}