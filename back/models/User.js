'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: true,
           
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
           unique: true,
           
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        birthday: {
            type: DataTypes.STRING,
            allowNull:true,
            
        },
        birthday_place: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        actual_club: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        categorie: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hobbies: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
        profil_pic: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: true,
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