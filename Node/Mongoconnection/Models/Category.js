const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  CategoryName: { type: String },
  
  
 // last_name: { type: String, required: true, trim: true, uppercase: true }
  
});

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel;
