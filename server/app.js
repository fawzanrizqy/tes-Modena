if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const Controller = require('./controllers/controller');
const errorHandler = require('./middlewares/errorHandler');
const { authUser } = require('./middlewares/auth');
const app = express()
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//route:
app.post('/register', Controller.register)
app.post('/login', Controller.login)
//authenticated endpoint:
app.use(authUser)
app.get('/dashboard', Controller.dashboard)
//error handler:
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
