'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profil_pic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        club: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Client.associate = function (models) {
        Client.belongsTo(models.User)

    };
    return Client;
};