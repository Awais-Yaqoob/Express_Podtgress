const { INTEGER, DataTypes,NUMBER } = require('sequelize');
let sequelize = require('../../../common/dbConnection');
const student = sequelize.define('student' , {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    rollNumber:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true

    },
    department:{
        allowNull:false,
        type:DataTypes.STRING,

    },
    semester:{
        allowNull:true,
        type:DataTypes.INTEGER,
    }

}
    )
    module.exports = student;