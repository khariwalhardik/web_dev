const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
//this is used to set the template engine   

app.get('/', (req, res) => {
    // res.send('Hello World!')
    let brandname="adidas";
    let model="superstar";

    //how to send this variable to the html file, because we don't want to create seperate html file for each brand and model
    //we can use template engine to do this
    // res.sendFile('/templates/index.html',{root:__dirname})


    res.render('blogpost',{brandname:brandname,model:model})
})
app.get('/:slug', (req, res) => {
    res.send(`Hello ${req.params.slug}!`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
