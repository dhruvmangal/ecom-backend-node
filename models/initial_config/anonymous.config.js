const { DataTypes} = require("sequelize");
const sequelize = require('../../connections/mysql.conn')

const AnonymousConfig= sequelize.define( "a_config", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    key: {
        type: DataTypes.STRING

    },
    value: {
        type: DataTypes.STRING
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

});

module.exports = AnonymousConfig
