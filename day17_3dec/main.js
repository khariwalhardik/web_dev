const express = require('express')
const app = express()
const port = 3000
//app.get or app.post or app.put or app.delete(path,handler function);
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!')
})
// app.get('/blog/introtojs', (req, res) => {
//     res.send('Hello introtojs!')
// })

// app.get('/blog/introtopython', (req, res) => {
//     res.send('Hello introtopython!')
// })
//we are adding so much of get request to the server side
//we can now use the power of express to use the dynamic routing
//instead we can use parameters and queries
app.get('/blog/:slug/:second', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello ${req.params.slug} and ${req.params.second}`);
})
//params occurs as an object and occurs in the url itself
//http://localhost:3000/blog/introtojs/introtopython
//query occurs as an object and occurs after the ? in the url
//http://localhost:3000/blog/introtojs/introtopython?region=in&age=20?mode=dark


//app.get is used to get the request from the client side 
//handler function is used to send the response to the client side like res.send
//res.send is sending the response to the client side

//when we run it with /hardik which is not defined in the app.get then it will show the error as Cannot GET /hardik



//we cannot get /dummy.txt we will get the error as Cannot GET /dummy.txt
//this is safety feature of the express
//to remove this error we can use the express.static

//firstly we have to create a folder named public and add all the files that we want to access in the public folder

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//we can use the express.static to access the files in the public folder multiple times

app.use('/static', express.static('public'))
app.use('/static', express.static('files'))