const Sequelize = require('sequelize');
const db = require('../config/database');

const VisitTable = db.define('VisitTable', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cust_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contact_person: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contact_no: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    interest_product: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    visit_subject: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    visit_datetime:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    is_disabled:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    is_deleted:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    emp_id:{
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    

});

module.exports = VisitTable;