const QRCode = require('qrcode')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    const url = req.query.url
    const options = {
        scale: 7
    }
    QRCode.toDataURL(url, options, (err, response) => {
        if (err) throw err
        res.json(response)
    })
})

app.listen(3001, () => console.log('server running!'))
 
const asdas = 'https://drive.google.com/file/d/1R9pWf91tp-qdtvPKu6voFaULv1q4XbXH/view'


