require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectMongoose } = require("./databaseConnection");
const authRouter = require("./routes/authRouter");
const { StripeCheckout } = require("./controller/paymentController");
const { Product } = require("./model/productModel");
const stripe = require("stripe")(
  "sk_test_51OlSaPSIRvECnq9uF6zkSQ2OztCE3xGucGpRLDLDhQR3KZVpSfOhpGukefXQnPE3UbJUh8d1GYJPwo1tGE340Ir60088WOkEfh"
);

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", authRouter);
// app.use("/cart",cartRouter)

//database connection
connectMongoose();

app.listen(PORT, () => {
  console.log(`app is listning on ${PORT}`);
});

app.post("/checkout", async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      shipping: {
        name: 'Jenny Rosen',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
      },
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.product.product,
            },
            unit_amount: item.product.finalprice * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: "http://localhost:8080/success",
      cancel_url: "http://localhost:8080/cancel",
    });
    console.log(customer)
    res.json({ url: session.url });
    console.log(res.app)
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});



app.get("/", (req, res) => {

  res.send("server is live");

});
