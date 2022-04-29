const express = require('express')
const app = express()
const path = require('path')
const users = require('./User')

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.get('/users',(req,res) => {
    const page = req.query.page
    const limit = 5
    startIndex = (page - 1) * limit
    endIndex = page * limit
    result = users.slice(startIndex,endIndex)

    return res.json(result)

})

app.listen(3000)