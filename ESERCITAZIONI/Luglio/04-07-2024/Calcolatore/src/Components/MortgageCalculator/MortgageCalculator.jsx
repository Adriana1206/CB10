import React, { useState } from 'react';
import './MortgageCalculator.css';

const MortgageCalculator = () => {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('repayment');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const principal = parseFloat(amount);
    const interest = parseFloat(rate);
    const years = parseFloat(term);

    if (isNaN(principal) || isNaN(interest) || isNaN(years)) {
      setResult('Please enter valid numbers.');
      return;
    }

    const totalPayment = (principal + interest) * years;
    setResult(totalPayment.toFixed(2));
  };

  const handleClear = () => {
    setAmount('');
    setTerm('');
    setRate('');
    setType('repayment');
    setResult(null);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-form">
        <h2>Mortgage Calculator</h2>
        <button className="clear-button" onClick={handleClear}>Clear All</button>
        
        <div className="form-group">
          <label>Mortgage Amount</label>
          <div className="input-group">
            <span className="input-prefix">£</span>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
        </div>

        <label>Mortgage Term</label>
        <div className="form-group">
          <span className="input-suffix">years</span>
          <input type="number" value={term} onChange={(e) => setTerm(e.target.value)} />
        </div>

        <label>Interest Rate</label>
        <div className="form-group">
          <span className="input-suffix">%</span>
          <input type="number" step="0.01" value={rate} onChange={(e) => setRate(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Mortgage Type</label>
          <div className="radio-group">
            <label>
              <input type="radio" value="repayment" checked={type === 'repayment'} onChange={(e) => setType(e.target.value)} />
              Repayment
            </label>
            <label>
              <input type="radio" value="interest-only" checked={type === 'interest-only'} onChange={(e) => setType(e.target.value)} />
              Interest Only
            </label>
          </div>
        </div>

        <button className="calculate-button" onClick={handleCalculate}>
          Calculate Repayments
        </button>
      </div>

      <div className="calculator-results">
        {result !== null ? (
          <div className="results-display">
            <p>Total Payment: £{result}</p>
          </div>
        ) : (
          <div className="results-placeholder">
            <p>Results shown here</p>
            <p>Complete the form and click "calculate repayments" to see what your total payments would be.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
