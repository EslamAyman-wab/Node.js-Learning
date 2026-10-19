const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Add a product</title>
      </head>
      <body>
        <h1>Add a product</h1>
        <form action="/admin/add-product" method="POST">
          <label for="title">Product name</label>
          <input id="title" name="title" type="text" required>
          <button type="submit">Add product</button>
        </form>
        <p><a href="/">Go to the shop</a></p>
      </body>
    </html>
  `);
});

router.post("/add-product", (req, res) => {
  res.send(`<!doctype html><html lang="en"><body><h1>Product submitted!</h1><p><a href="/admin/add-product">Add another</a></p><p><a href="/">Go to the shop</a></p></body></html>`);
});

module.exports = router;
