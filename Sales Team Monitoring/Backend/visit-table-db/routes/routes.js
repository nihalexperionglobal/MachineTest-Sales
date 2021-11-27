const express = require('express');
const router = express.Router();
const visitTableRoutes = require('./visitTables.route');



router.use('/visitTables', visitTableRoutes);


module.exports = router;