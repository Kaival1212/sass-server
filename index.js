const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.host || 8080;

const orderEndpoint = require("./supabase/orders")


app.use("/supabase/orders" , orderEndpoint);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
