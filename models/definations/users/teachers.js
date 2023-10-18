const { INTEGER, DataTypes,NUMBER } = require('sequelize');
let sequelize = require('../../../common/dbConnection');
const teacher = sequelize.define('teacher' , {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    Scale:{
        allowNull:false,
        type:DataTypes.STRING,

    },
    department:{
        allowNull:false,
        type:DataTypes.STRING,
    },

}
    )
    module.exports = teacher;