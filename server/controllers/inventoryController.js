const mongoose = require('mongoose');
const Inventory = require('../../models/inventory');



mongoose.connect('mongodb://127.0.0.1:27017/inventory')
  .then(()=>{
    console.log('Connection is open');
  })
  .catch(err =>{
    console.log(`Error: ${err}`);
  })

  exports.inventoryHomepage = async(req,res) =>{
    const inventories = await Inventory.find({});
    res.status(200).render('inventory/index',{inventories});
  }

