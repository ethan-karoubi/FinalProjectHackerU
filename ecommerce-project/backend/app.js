const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const productRoutes = require("./routes/product");
const registerRoutes = require("./routes/register");
const loginRoutes = require("./routes/login");
const userRoutes = require("./routes/user");
const cartRoutes= require("./routes/cart");
const Product = require("./models/product");
const app = express();

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

// mongoose
//   .connect(process.env.DB, { useNewUrlParser: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((e) => console.log("cannot connect to MongoDB", e));
// app.use("/api/product", productRoutes);
// app.use("/api/register", registerRoutes);
// app.use("/api/login", loginRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/cart", cartRoutes);

// app.listen(port, () => console.log(`Server  started on port ${port} `));

mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(async () => {
    console.log("MongoDB connected");
    const products = await populateDB();
    console.log("DB populated with products", products);
  })
  .catch((e) => console.log("cannot connect to MongoDB", e));
app.use("/api/product", productRoutes);
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);

app.listen(port, () => console.log(`Server  started on port ${port} `));

function populateDB() {
  const products = [
    {
      name: "Iphone 11 Pro",
      price: 249,
      image:
        "https://www.journaldugeek.com/content/uploads/2020/10/apple-keynote-2020-tout-savoir-sur-les-nouveaux-iphone-12-et-iphone-12-pro.jpg",
      category: "iPhone",
    },
    {
      name: "Iphone 13 Pro",
      price: 349,
      image:
        "https://www.journaldugeek.com/content/uploads/2020/10/apple-keynote-2020-tout-savoir-sur-les-nouveaux-iphone-12-et-iphone-12-pro.jpg",
      category: "iPhone",
    },
    {
      name: "Iphone 12 Pro",
      price: 299,
      image:
        "https://www.journaldugeek.com/content/uploads/2020/10/apple-keynote-2020-tout-savoir-sur-les-nouveaux-iphone-12-et-iphone-12-pro.jpg",
      category: "iPhone",
    },
    {
      name: "Samsung Galaxy S3",
      price: 249,
      image:
        "https://www.digitaltrends.com/wp-content/uploads/2022/05/galaxy-s22-angled-shot.jpg?p=1",
      category: "Samsung",
    },
    {
      name: "Samsung Galaxy S1",
      price: 149,
      image:
        "https://www.digitaltrends.com/wp-content/uploads/2022/05/galaxy-s22-angled-shot.jpg?p=1",
      category: "Samsung",
    },
    {
      name: "Samsung Galaxy S2",
      price: 199,
      image:
        "https://www.digitaltrends.com/wp-content/uploads/2022/05/galaxy-s22-angled-shot.jpg?p=1",
      category: "Samsung",
    },
    {
      name: "Ipad Mini",
      price: 149,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202207_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1654903884450",
      category: "iPad",
    },
    {
      name: "Ipad Pro",
      price: 299,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202207_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1654903884450",
      category: "iPad",
    },
    {
      name: "Ipad Air",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-unselect-gallery-1-202207_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1654903884450",
      category: "iPad",
      price: 159,
    },
    {
      name: "Nokia 3310",
      image:
        "https://www.cdiscount.com/pdt2/0/3/2/1/550x550/NOK3700968000032/rw/nokia-3310.jpg",
      category: "Nokia",
      price: 100,
    },
  ];

  return Product.insertMany(products);
}