import express from 'express';
import createSupabaseClient from "../../createSupabaseClient.js";

const Endpoint = express();


const client = await createSupabaseClient();


Endpoint.get('/', async (req, res) => {
    const { data, error } = await client.from("orderquotation").select("*");
    if (error) {
        return res.status(500).json({ error: error.message });
    }
    return res.json(data);
});

export default Endpoint
