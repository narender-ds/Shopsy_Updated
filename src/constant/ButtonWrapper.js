// import { useEffect } from "react";
// import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

// const ButtonWrapper = ({ type }) => {
//   const [{ options }, dispatch] = usePayPalScriptReducer();

//   useEffect(() => {
//     dispatch({
//       type: "resetOptions",
//       value: {
//         ...options,
//         intent: "subscription",
//       },
//     });
//   }, [type]);

//   return (
//     <PayPalButtons
//       createSubscription={(data, actions) => {
//         return actions.subscription
//           .create({
//             plan_id: "P-3RX065706M3469222L5IFM4I",
//           })
//           .then((orderId) => {
//             // Your code here after create the order
//             return orderId;
//           });
//       }}
//       style={{
//         label: "subscribe",
//       }}
//     />
//   );
// };

// export default ButtonWrapper;
