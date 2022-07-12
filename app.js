const express = require("express");
const admin = require('firebase-admin');
var serviceAccount = require('./react-3d787-firebase-adminsdk-qboka-7d338060b4.json');

const bodyParser = require('body-parser')
const app = express();

const firebaseConfig = {
  apiKey: "AIzaSyCeBCLYLbx7tJErFLTIMGYHY4MJYpKSbEg",
  authDomain: "react-3d787.firebaseapp.com",
  databaseURL: "https://react-3d787-default-rtdb.firebaseio.com",
  projectId: "react-3d787",
  storageBucket: "react-3d787.appspot.com",
  messagingSenderId: "99541235015",
  appId: "1:99541235015:web:2ee8d0adc616d52da5c862"
};


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-3d787-default-rtdb.firebaseio.com"
});
const db = admin.database();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

app.post("/addSelection", (req, res) => {
  const selection = req.body;
  const checkoutRef = db.ref("checkout/" + selection.selectionId + "/");

  checkoutRef.set({
    "added": admin.database.ServerValue.TIMESTAMP,
    ...selection});
  res.redirect("/");
});


app.post("/getEvent", (req, res) => {
  const eventData = req.body;
  fetch('https://sportsapicdn-mobile.betking.com/api/feeds/prematch/lite/event/ungrouped/en/4/'+eventData.eventId).then((response) => response.json())
  .then((data) => {
    const markets =[];
    participants = data.AM[0].IT[0].IN.split(" - ");
    data.AM[0].IT[0].participant1 = participants[0];
    data.AM[0].IT[0].participant2 = participants[1];
    for (const key in data.AM[0].IT[0].OC) {
      const selections =[];
      for (const key2 in data.AM[0].IT[0].OC[key].MO) {
        const selection = {
          key: key,
          eventId: data.AM[0].IT[0].II,
          eventName: data.AM[0].IT[0].IN,
          marketId: data.AM[0].IT[0].OC[key].OI,
          marketName: data.AM[0].IT[0].OC[key].OT.ON,
          selectionId: data.AM[0].IT[0].OC[key].MO[key2].OI,
          selectionName: data.AM[0].IT[0].OC[key].MO[key2].OA.ON,
          selectionOdds: data.AM[0].IT[0].OC[key].MO[key2].OT.OO,
          was: data.AM[0].IT[0].OC[key].MO[key2].OT.UO,
          ...data.AM[0].IT[0].OC[key].MO[key2],
        };
        selections.push(selection);
      }

      const market = {
        key: key,
        ...data.AM[0].IT[0].OC[key],
      };
      market.MO = selections;
      markets.push(market);
    }
    data.AM[0].IT[0].OC = markets;
    res.end(JSON.stringify(data));
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
