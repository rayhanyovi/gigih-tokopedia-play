const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
      unique: true,
    },
    video_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
      unique: true,
    },
    product_name: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    product_url: { type: String, required: true },
    product_thumbnail: { type: String, required: true },

    // other fields for product data
  },
  { collection: "product_list" }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
