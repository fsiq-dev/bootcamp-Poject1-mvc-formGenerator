import express from 'express'
const app = express();
import path from 'path'
const __dirname = path.resolve();
import bodyParser from 'body-parser';

app.use(bodyParser.json({limit: "2mb"}));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true, parameterLimit:50000 }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));

import routes from './routes/routes.js'
app.use ('/', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT,() => {console.log(`SERVER RUNNING ON PORT:http//localhost:${PORT}`);})