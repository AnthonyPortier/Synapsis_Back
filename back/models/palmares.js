'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Palmares = sequelize.define('Palmares', {
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
    }, {
        underscored: true,
        timestamps: true,
    });
    Palmares.associate = function (models) {
        

    };
    return Palmares;
};