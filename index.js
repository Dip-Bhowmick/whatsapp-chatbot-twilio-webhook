const express = require("express");
const twilio = require('twilio')('AC836db151c1e073e1cfb172ee3c8c0440', 'd9f737b41f000b17f509cb02ce084378');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/timestamp", (req, res) => {
    res.send(`${Date.now()}`);
});

app.post('/whatsapp', (req, res) => {
    var msg = req.body.Body;
    var sender = req.body.From;
    console.log(msg);
    console.log(sender);
    twilio.messages.create({
        to: sender,
        body: msg,
        from: "whatsapp:+14155238886"
    }).then(sts => console.log(sts));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server start at port: ${port}`));