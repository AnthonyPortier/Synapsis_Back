'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Palmares = sequelize.define('Palmares', {
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Palmares.associate = function (models) {
        Palmares.belongsTo(models.User)

    };
    return Palmares;
};