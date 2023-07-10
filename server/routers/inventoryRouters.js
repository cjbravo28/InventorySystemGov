const express = require('express');
const router = express.Router();
const InventoryController = require('../controllers/inventoryController');

router.get('/inventory',InventoryController.inventoryHomepage);



module.exports = router;
