const visitTableDao = require('../dao/visitTable.dao');


var visitTableController = {
    addVisitTable: addVisitTable,
    findVisitTables: findVisitTables,
    findVisitTableById: findVisitTableById,
    updateVisitTable: updateVisitTable,
    deleteById: deleteById,
}

async function addVisitTable(req, res) {
    let visitTable = req.body;
    
    visitTableDao.create(visitTable).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findVisitTableById(req, res) {
    visitTableDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    visitTableDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "VisitTable deleted successfully",
                visitTable: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateVisitTable(req, res) {
    visitTableDao.updateVisitTable(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "VisitTable updated successfully",
                visitTable: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findVisitTables(req, res) {
    visitTableDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}



module.exports = visitTableController;