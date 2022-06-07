const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json())

const users = [
    {
        username:'joe',
        password: '123'
    }
]

app.post('/', (req, res)=>{
    const loggingUser = users.find(item=>{
        return item.username===req.body.username
    })
    if(!loggingUser || loggingUser.password !== req.body.password){
        res.send({
            error: 'incorrect username or password'
        })
    } else if (loggingUser.password === req.body.password){
        res.send({
            success: true,
            currentUser: loggingUser
        })
    }
})

app.listen(5000, ()=>{
    console.log('listening')
})