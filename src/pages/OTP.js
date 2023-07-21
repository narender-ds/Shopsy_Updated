import React, { useEffect, useState } from "react";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const randomOtp = () => {
    // var digit = "A1b3C4d5E6f7";
    var digit = "0123456789";

    let OTP = "";

    for (let i = 0; i < 6; i++) {
      OTP += digit[Math.floor(Math.random() * 10)];
    }
    return OTP;
  };

  return (
    <div>
      {<button onClick={() => setOtp(() => randomOtp())}>Generate OTP</button>}
      {otp}
    </div>
  );
};
  
export default OTP;
