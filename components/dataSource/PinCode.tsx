import React, { useState } from "react";
import ReactCodesInput from "react-code-input";

const CORRECT_PIN_CODE = "111222";

const PinCode = () => {
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [pinCode, setPinCode] = useState("");
  const [btnIsPressed, setBtnIsPressed] = useState(false);

  const checkPinCode = () => {
    const isPinCodeValid = pinCode === CORRECT_PIN_CODE;

    setBtnIsPressed(true);
    setIsPinCodeValid(isPinCodeValid);
    if (!isPinCodeValid) setPinCode("");
  };

  const handlePinChange = (pinCode: React.SetStateAction<string>) => {
    setPinCode(pinCode);
    setBtnIsPressed(false);
  };
}

export default PinCode
