'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Palmares = sequelize.define('Palmares', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Palmares.associate = function (models) {


    };
    return Palmares;
};