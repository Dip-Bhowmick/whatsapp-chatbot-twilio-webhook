const express = require("express");
const twilio = require('twilio')('AC836db151c1e073e1cfb172ee3c8c0440', 'd56628a0b36efdbb505d1870e270832b');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/timestamp", (req, res) => {
    res.send(`${Date.now()}`);
});

app.post('/whatsapp', async (req, res) => {
    console.log(req.body);
    var msg = req.body.Body;
    var sender = req.body.From;
    twilio.messages.create({
        to: sender,
        body: msg,
        from: "whatsapp:+14155238886"
    });
    
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server start at port: ${port}`));