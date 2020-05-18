
import express from "express";

const app = express();

import dogRoute from './dog/dogRoute'

app.use('/dogs', dogRoute)

export default app;
