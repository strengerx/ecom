const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const PORT = process.env.ECOM_SERVER_PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => { console.log(`server is running on port: ${PORT}`); })