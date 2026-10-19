const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Shop</title>
      </head>
      <body>
        <h1>Welcome to the shop!</h1>
        <p>Browse our products and enjoy your visit.</p>
        <p><a href="/admin/add-product">Add a product</a></p>
      </body>
    </html>
  `);
});

module.exports = router;
