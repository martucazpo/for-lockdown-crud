if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log("Tiny electronic ears are listening on port " + PORT);
});