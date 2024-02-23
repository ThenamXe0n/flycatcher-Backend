
exports.StripeCheckout = async (req, res) => {
  try {
    const session = await stripe.checkout.session.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.item.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
              price: item.price,
            },
            totalAmount: item.quantity * item.price,
          },
          quantity: item.quantity,
        };
      }),
      success_url: "http://localhost:8080/success",
      cancel_url: "http://localhost:8080/cancel",
    });
    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
