const http = require('http');

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.log(err)
    }).on('data', (chunk) => {
        // console.log('chunk', Buffer.from(chunk).toString())
        // body.push(chunk.toString())
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log('body:', body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(`<html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style>
                body #box {
                    display: flex;
                    width: 500px;
                    height: 400px;
                    background-color: rgb(255, 255, 255)
                }
                body #box .dv1 {
                    flex: 1;
                    background-color: rgb(255, 0, 0)
                }
                body #box .pic {
                    width: 200px;
                    height: 100px;
                    border: 1px solid red;
                    background-color: rgb(0, 255, 0)
                }
            </style>
        </head>
        <body>
            <div id="box">
                <div class="pic">
                </div>
                <div class="dv1">
                </div>
            </div>
        </body>
        </html>`)
    })
}).listen(8088)
console.log('server started')