# Bug fix notes

## Why `http://localhost:3000/` did not show the shop page

There were two related problems:

1. The `start` script in `package.json` pointed to `chapter_01/ch_03/index.js`, but the app entry file is `chapter_01/ch_03/app.js`. That meant `npm start` could not start the intended app.
2. The shop route built the page path incorrectly. Using `../views/shop.html` from the app's root directory pointed to `chapter_01/views/shop.html`, which does not exist. The actual page is at `chapter_01/ch_03/views/shop.html`.

The start script now launches `app.js`, and the shop route sends the existing `views/shop.html` file using the `rootDir` path helper. The admin route also needs Node's `path` module to build its page path.

After changing the start script, restart the server so the updated code is used. If port 3000 is already occupied, stop the previous server first.
