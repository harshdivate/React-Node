const express = require('express');
const cors = require("cors");
const app = express();

const PORT = 4004;

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    console.log(req)
    res.json({'all' : 'ok'})
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})