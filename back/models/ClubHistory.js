'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Club_history = sequelize.define('Club_history', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poste: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            validate: {
                isDate: true
            },
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    
    Club_history.associate = function (models) {


    };
    return Club_history;
};