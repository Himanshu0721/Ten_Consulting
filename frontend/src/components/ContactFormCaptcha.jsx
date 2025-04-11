import { useState, useEffect, useRef } from "react";

const Captcha = ({ onVerify }) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const canvasRef = useRef(null);

  const generateCaptcha = () => {
    const chars = "abcdefhjkmpqrtuvwxyzABCDEFGHJKMNPQRTUVWXY"; // this ensures that the characters are properly distinguishable
    // and avoids characters that can be confused with each other

    return Array.from({ length: 5 }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  };

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    text.split("").forEach((char, i) => {
      ctx.font = `${Math.random() * 10 + 22}px Arial`;
      ctx.fillStyle = `rgb(${Math.random() * 80}, ${Math.random() * 80}, ${
        Math.random() * 150
      })`;
      ctx.fillText(char, 70 + i * 30, 40);
    });
  };

  const refreshCaptcha = () => {
    const newText = generateCaptcha();
    setCaptchaText(newText);
    setUserInput("");
    onVerify(false);
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  useEffect(() => {
    drawCaptcha(captchaText);
  }, [captchaText]);

  const handleCaptchaInput = (value) => {
    setUserInput(value);
    if (value === captchaText) {
      onVerify(true);
    } else {
      onVerify(false);
    }
  };

  return (
    <div>
      <div className="space-y-2 mt-4 ">
        <canvas ref={canvasRef} height={60} className="border w-auto" />
        <button onClick={refreshCaptcha} className="border-b" type="button">
          Click to refresh captcha
        </button>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => handleCaptchaInput(e.target.value)}
        placeholder="Enter Captcha"
        className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-800 mt-4"
      />
    </div>
  );
};

export default Captcha;
