import request from 'request'
import path from 'path'

const requestToApi = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    next();
}
const getHeaders = (req) => {
    return {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `${req.header('Authorization')}`,
        'User-Agent': `${req.header('User-Agent')}`
    }
}
module.exports = (router) => {
    router.all('*', requestToApi),
    router.get('/api/user/repos', (req,res) => {

        const options = { 
            url: 'https://api.github.com/user/repos',
            method: req.method,
            json: true,
            body: req.body,
            headers: getHeaders(req)
        };
        // console.log(options)
        request(options, (err, requestResponse, body) => {
            console.log(`Path:${req.path}: ${body} / ${requestResponse}`) 
            if(err) { 
                res.status(500).send({
                    err: err
                })
            }
            res.send(body)
        })
    }),
    router.post('/api/login', (req,res) => {
        

        const options = { 
            url: 'https://github.com/login/oauth/access_token',
            method: req.method,
            json: true,
            body: req.body,
            headers: getHeaders(req)
        };
        // console.log(options)
        request(options, (err, requestResponse, body) => {
            console.log(`Path:${req.path}: ${body}`) 
            if(err) { 
                res.status(500).send({
                    err: err
                })
            }
            res.send(body)
        })
    }),
    router.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../static/index.html'));
    })
};
