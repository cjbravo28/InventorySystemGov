const mongoose = require('mongoose');
const Inventory = require('../models/inventory');


mongoose.connect('mongodb://127.0.0.1:27017/inventory')
  .then(()=>{
    console.log('Connection Open');
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  })

  const inventoryDb = async() => {
    // await Inventory.deleteMany({});
    const inventory = new Inventory(
      {
        name: 'Ballpen',
        image: 'https://cf.shopee.ph/file/a007abc183755f2fa37b454c389a622e',
        qty: 5,
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dignissimos consequatur quas in similique odit quia natus a at provident.`
      })
    await inventory.save();
  }

  inventoryDb().then(()=> {
    mongoose.connection.close();
  })