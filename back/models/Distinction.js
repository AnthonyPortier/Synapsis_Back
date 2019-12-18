'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Distinction = sequelize.define('Distinction', {
        name: {
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
    });

    Distinction.associate = function (models) {
        Distinction.belongsTo(models.User)
    };
    return Distinction;
};