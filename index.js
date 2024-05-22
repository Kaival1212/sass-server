import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.HOST || 8080;


import customers from "./database/customers/index.js";
import orders from "./database/orders/index.js";
import draftOrders from "./database/draftOrders/index.js";
import design from "./database/design/index.js";
import orderdesign from "./database/design/orderdesign/index.js";
import quotation from "./database/quotation/index.js";
import orderquotation from "./database/quotation/orderquotation/index.js";

app.use('/orders', orders);
app.use('/draftorders',draftOrders );
app.use('/customers',customers)
app.use('/design',design)
app.use('/orderdesign',orderdesign)
app.use('/quotation',quotation)
app.use('/orderquotation',orderquotation)
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
