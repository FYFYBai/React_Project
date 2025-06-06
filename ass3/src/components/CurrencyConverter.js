import { useState } from "react";
import "./CurrencyConverter.css";

function CurrencyConverter() {
  const [usd, setUsd] = useState("");
  const [eur, setEur] = useState("");

  const exchangeRate = 0.93; // Example exchange rate from USD to EUR without fetching from an API

  const handleUsdChange = (e) => {
    const value = e.target.value;
    setUsd(value);
    const converted = parseFloat(value) * exchangeRate;
    setEur(isNaN(converted) ? "" : converted.toFixed(2));
  };

  const handleEurChange = (e) => {
    const value = e.target.value;
    setEur(value);
    const converted = parseFloat(value) / exchangeRate;
    setUsd(isNaN(converted) ? "" : converted.toFixed(2));
  };

  return (
    <div className="converter-container">
      <h2>Currency Converter</h2>
      <div className="converter-inputs">
        <div>
          <label>USD:</label>
          <input type="number" value={usd} onChange={handleUsdChange} />
        </div>
        <div>
          <label>EUR:</label>
          <input type="number" value={eur} onChange={handleEurChange} />
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
