const path = require('path')

const index = (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'public', 'index.html'))
}

const about = (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'public', 'about.html'))
}

module.exports = { index, about }
