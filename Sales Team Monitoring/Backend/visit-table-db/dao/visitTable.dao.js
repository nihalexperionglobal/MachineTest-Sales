const VisitTable = require('../models/VisitTable');
var visitTableDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateVisitTable: updateVisitTable
}

function findAll() {
    return VisitTable.findAll();
}


function findById(id) {
    return VisitTable.findByPk(id);
}

function deleteById(id) {
    return VisitTable.destroy({ where: { id: id } });
}

function create(visitTable) {
    var newVisitTable = new VisitTable(visitTable);
    return newVisitTable.save();
}

function updateVisitTable(visitTable, id) {
    var updateVisitTable = {
        cust_name: visitTable.cust_name,
        contact_person: visitTable.contact_person,
        contact_no: visitTable.contact_no,
        interest_product: visitTable.interest_product,
        visit_subject: visitTable.visit_subject,
        description: visitTable.description,
        visit_datetime: visitTable.visit_datetime,
        is_disabled: visitTable.is_disabled,
        is_deleted: visitTable.is_deleted,
        emp_id: visitTable.emp_id
        
        
    };
    return VisitTable.update(updateVisitTable, { where: { id: id } });
}
module.exports = visitTableDao;