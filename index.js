import express from 'express'
const app = express();

import routes from './routes/routes.js'
app.use ('/', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT,() => {console.log(`SERVER RUNNING ON PORT:http//localhost:${PORT}`);})