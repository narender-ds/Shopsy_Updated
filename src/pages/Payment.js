/* Paypal Payment method for  Monthly Subscription  */
import React, { useEffect } from "react";

const Payment = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AaN1RGLruIpnlZrghNuC4RwvLXAGsS7Ht-q88YYxjCWRuR0as7SZb6JQ4_BMBdF7go7hsuH-NJNBKXnc&vault=true&intent=subscription";
    script.setAttribute("data-sdk-integration-source", "button-factory");
    script.addEventListener("load", initializePayPalButtons);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializePayPalButtons = () => {
    window.paypal
      .Buttons({
        style: {
          shape: "pill",
          color: "blue",
          layout: "vertical",
          label: "subscribe",
        },
        createSubscription: function (data, actions) {
          return actions.subscription.create({
            plan_id: "P-8HU31427TS7410920MSXD6PQ",
          });
        },
        onApprove: function (data, actions) {
          alert(data.subscriptionID);
        },
      })
      .render("#paypal-button-container-P-8HU31427TS7410920MSXD6PQ");
  };

  return (
    <div
      style={{ marginLeft: "500px" }}
      id="paypal-button-container-P-8HU31427TS7410920MSXD6PQ"
    />
  );
};

export default Payment;

/* Paypal Payment method for create Order*/

// import React from 'react'

// const Payment = () => {
//   return (
//     <div>Payment</div>
//   )
// }

// export default Payment