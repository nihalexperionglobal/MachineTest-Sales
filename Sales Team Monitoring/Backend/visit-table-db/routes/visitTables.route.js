const express = require('express');
const router = express.Router();
const visitTableController = require('../controller/visitTable.controller');

//VisitTable
router.post('/', visitTableController.addVisitTable);
router.get('/', visitTableController.findVisitTables);
router.get('/:id', visitTableController.findVisitTableById);
router.put('/:id', visitTableController.updateVisitTable);
router.delete('/:id', visitTableController.deleteById);


//Resourse

module.exports = router;
