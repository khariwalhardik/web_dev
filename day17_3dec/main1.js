const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

//this act as the middleware
//firstly the request came if like dummy.txt is present in the folder
//now chali jao request, do not go to the next middleware
//request response cycle is completed
app.use(express.static('public'));
//this is get request
//get request has the limit of 8192 byte


//middleware 1
app.use((req, res, next) => {
    console.log("m1");
    next();
})
//middleware 2
app.use((req, res, next) => {
    console.log("m2");
    next();
})

app.use((req, res, next) => {
    fs.appendFile('log.txt', `Request URL: ${req.originalUrl} \t Request Type: ${req.method} \t Time: ${Date.now()}\n`, (err) => {
        if (err) {
            console.log(err);
        }
    }
    )
    console.log(`Request URL: ${req.originalUrl} \t`);
    console.log(`Request Type: ${req.method} \t`);
    console.log(`Time: ${Date.now()}\n`);

    //you can also change the request
    req.hardik="hello i am hardik khariwal";
    next();
})



// app.get('/', (req, res) => {
//     console.log("hey its a get request");
//     res.send(`Hello World! get ${req.hardik}`)
// })

//how to send post request
//post request is used to send the data to the server
//by default the get request is used
//get request is used to fetch the data from the server
//process to send the post request is to use the postman software

//when we are sending the sensitive data or content of the website then we use the post request
app.post('/', (req, res) => {
    console.log("hey its a post request");
    res.send('Hello World! post ')
})

//put is used to update the data
app.put('/', (req, res) => {
    console.log("hey its a put request");
    res.send('Hello World! put')
})

//delete is used to delete the data
app.delete('/', (req, res) => {
    console.log("hey its a delete request");
    res.send('Hello World! delete')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



//chaining of requests
// app.get('/example/b', (req, res, next) => {
//     console.log('the response will be sent by the next function ...')
//     next()
// }).put((req, res) => {
//     res.send('Hello from B!')
// }).delete((req, res) => {
//     res.send('Hello from B!')
// }
// )


//rendering the html file on server
app.get('/index', (req, res) => {
    // res.send("this is index page");
    // console.log("this is index page");

    res.sendFile('/template/index.html', { root: __dirname });
}   )   

//json data
app.get('/api', (req, res) => {
    res.json({ name: "john", age: 30 });
})


//to add express rounting in the file
const blog = require('./routes/blog')
app.use('/routes/blog', blog)


//syntax for the middleware

// app.use((req, res, next) => {
//     console.log("middleware");
//     next();
// })
//if next() is not called then the request response cycle is not completed


//application level middleware
//router level middleware
//error handling middleware
//built in middleware
//third party middleware




