

import express from 'express';
import createSupabaseClient from "../createSupabaseClient.js";

const customersEndpoint = express();


const client = await createSupabaseClient();


customersEndpoint.get('/', async (req, res) => {
    const { data, error } = await client.from("customers").select("*");
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    return res.json(data);
});

// customersEndpoint.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     const { data, error } = await client.from("order_table").select("*").eq('id', id);
//     if (error) {
//         return res.status(500).json({ error: error.message });
//     }
//     if (data.length === 0) {
//         return res.status(404).json({ error: 'Order not found' });
//     }
//     return res.json(data[0]);
// });


export default customersEndpoint
