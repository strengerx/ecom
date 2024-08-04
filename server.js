const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const webRouter = require('./routes/web')

dotenv.config()
const PORT = process.env.ECOM_SERVER_PORT || 3000

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(webRouter)

app.use((req, res) => {
    res.status(404).json({ msg: `404 page not found` });
})

app.listen(PORT, () => { console.log(`server is running on port: ${PORT}`); })