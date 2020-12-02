const express = require("express");
const Razorpay = require("razorpay");

const app = express();
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.APIKEY,
  key_secret: process.env.SECRETKEY,
});

app.post("/createOrder", async (req, res) => {
  const order = await razorpay.orders.create({
    amount: req.body.amount,
    currency: 'INR',
  });
  res.send(order);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Razorpay Server listening at Port ${port}`));
