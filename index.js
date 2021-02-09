import express from 'express'
const app = express();
import path from 'path'
const __dirname = path.resolve();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));


import routes from './routes/routes.js'
app.use ('/', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT,() => {console.log(`SERVER RUNNING ON PORT:http//localhost:${PORT}`);})