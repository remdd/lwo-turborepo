"use client";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export function Checkout() {
  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
    currency: "GBP",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
}
