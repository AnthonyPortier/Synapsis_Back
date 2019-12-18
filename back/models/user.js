'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
            }
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATE,
            validate: {
                isDate: true
            }
        },
        birthday_place: {
            type: DataTypes.STRING,
        },
        actual_club : {
            type:DataTypes.STRING
        },
        categorie: {
            type: DataTypes.STRING
        },
        size :{
            type :DataTypes.STRING
        },
        weight : {
            type : DataTypes.STRING
        },
        hobbies: {
            type: DataTypes.STRING,
        },
        profil_pic: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING
        },


    }, {
        underscored: true,
        timestamps: true,
    });
    User.associate = function (models) {
        User

    };
    return User;
};