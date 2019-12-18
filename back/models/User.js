'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },
        email: {
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
            type: DataTypes.STRING,
            allowNull:false,
        
        },
        birthday_place: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        actual_club: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categorie: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hobbies: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        profil_pic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    }, {
        underscored: true,
        timestamps: false,
    });
    User.associate = function (models) {
        User.hasMany(models.Client)
        User.hasMany(models.Club_history)
        User.hasMany(models.Palmares)
        User.hasMany(models.Distinction)
    };
    return User;
};