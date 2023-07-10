const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  name: String,
  image: String,
  qty: Number,
  description: String
})

module.exports = mongoose.model('Inventory', InventorySchema);