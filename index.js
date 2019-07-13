const express = require("express")
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Hello Jimi! I feel Happy'))
app.get('/contec', (req, res) => res.send('ยุ่งไรกับกู'))
app.get('/test', (req, res) => {
    res.json({message: "test"})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
