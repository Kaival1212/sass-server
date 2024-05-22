import express from 'express';
import createSupabaseClient from "../createSupabaseClient.js";

const orderEndpoint = express();


const client = await createSupabaseClient();


orderEndpoint.get('/', async (req, res) => {
    const { data, error } = await client.from("order_table").select("*");
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    return res.json(data);
});

orderEndpoint.get('/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await client.from("order_table").select("*").eq('id', id);
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    if (data.length === 0) {
        return res.status(404).json({ error: 'Order not found' });
    }
    return res.json(data[0]);
});


export default orderEndpoint
