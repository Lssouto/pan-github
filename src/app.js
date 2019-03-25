import express from 'express'
import https from 'https'
import http from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

const app = express()

app.use(cors())
app.use(bodyParser.json())

/* route requests for static files to appropriate directory */
app.use(express.static(path.join(__dirname, '../static' )));

require('./handler')(app);

const certificate = {
    key: fs.readFileSync(__dirname + '/certs/server.key'),
    cert: fs.readFileSync(__dirname + '/certs/server.cert')
};

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0";
const port = process.env.PORT || 8080;
http.createServer(app).listen(port, () => {
    console.log('Listening...', port)
});