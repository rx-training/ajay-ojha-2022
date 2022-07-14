const mongoose = require("mongoose");
var category=require("./Category");
const productSchema = new mongoose.Schema({
    productName: { type: String, required: true, trim: true, uppercase: true },
    productPrice: { type: Number, required: true, trim: true },
    categoryID:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
        trim: true,
      },
      Feedback:[{Rating:Number,givenBy:String,Date:Date}]
  });

  
const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;