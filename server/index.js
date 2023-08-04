import express from 'express'; // 
import * as dotenv from 'dotenv';
import cors from 'cors'; // for cross origin requests coming from cors.

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config(); // and to set up the environment variables we have to call (dotenv.config)

const app = express(); // finally, we need to set up the express application
app.use(cors());// we need tp set of a couple of pieces of middleware by calling (app.use(cors())) and we need to pass cors otherwise we're going to have that cross-origin problems
app.use(express.json({ limit: "50mb" }))

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello DALL.E" })
})

app.listen(8080, () => console.log('Server has started on port 8080'))
