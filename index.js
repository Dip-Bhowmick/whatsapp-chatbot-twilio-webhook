const functions = require("firebase-functions");
const express = require("express");
const client = require('twilio')('AC836db151c1e073e1cfb172ee3c8c0440', 'd56628a0b36efdbb505d1870e270832b', { lazyLoading: true });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/timestamp", (req, res) => {
    res.send(`${Date.now()}`);
});
app.post('/whatsapp', async (req, res) => {
    var msg = req.body.Body;
    var to = req.body.From;
    if(msg == "hi"){
        try {
            client.messages.create({
                to: to,
                body: "hola",
                from: "whatsapp:+14155238886"
            });
        } catch (error) {
            console.log(error);
        }
    }
    res.end();
});

exports.app = functions.https.onRequest(app);
