"use client";
import React, {
  Dispatch,
  ReactHTMLElement,
  SetStateAction,
  useRef,
  useState,
} from "react";

const TimingInput = ({
  numberOfDigits,
  props,
  setValue,
}: {
  numberOfDigits: number;
  setValue: Dispatch<SetStateAction<string>>;
  props?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}) => {
  const otp = useRef(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef<HTMLInputElement[]>(
    Array(numberOfDigits).fill(null)
  );

  function handleChange(value: string, index: number) {
    let newArr = [...otp.current];
    newArr[index] = value;
    otp.current = newArr;

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
    console.log(otp.current);
    setValue(otp.current.join(""));
  }

  function handleBackspaceAndEnter(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace" && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  return (
    <div>
      <div className="relative border border-primary300 p-3 rounded-lg">
        <div>
          {otp.current.map((digit, index) => (
            <input
              key={index}
              //   value={digit}
              maxLength={1}
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              ref={(reference) => {
                otpBoxReference.current[index] = reference as HTMLInputElement;
              }}
              className={`w-10 h-auto text-black px-4 outline-none border-b-2 border-primary300 m-1`}
              style={{
                WebkitAppearance: "none",
              }}
            />
          ))}
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-3 text-bg-sec-color">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimingInput;
