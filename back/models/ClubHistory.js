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
            type: DataTypes.STRING,
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
        Club_history.belongsTo(models.User)

    };
    return Club_history;
};