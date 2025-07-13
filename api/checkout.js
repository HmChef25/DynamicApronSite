// api/checkout.js
import Stripe from "stripe";

// This reads your secret key from Vercel's env vars.
// Later, you'll set STRIPE_SECRET_KEY in your Vercel dashboard.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  const { items } = req.body; // Expect an array of { label, price }

  try {
    // Convert your cart items to Stripe line items
    const line_items = items.map(item => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.label },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: 1,
    }));

    // Create the Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${req.headers.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}