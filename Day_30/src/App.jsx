import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm);
    
    if (!isNaN(principal) && !isNaN(rate) && !isNaN(term)) {
      const monthlyPayment =
        (principal * rate) / (1 - Math.pow(1 + rate, -term));
      setMonthlyPayment(monthlyPayment.toFixed(2));
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Loan Calculator</h2>

      <div style={styles.inputContainer}>
        <label style={styles.label}>Loan Amount ($):</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputContainer}>
        <label style={styles.label}>Annual Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputContainer}>
        <label style={styles.label}>Loan Term (months):</label>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          style={styles.input}
        />
      </div>

      <button style={styles.button} onClick={calculateMonthlyPayment}>
        Calculate
      </button>

      {monthlyPayment !== null && (
        <div style={styles.result}>
          Monthly Payment: ${monthlyPayment}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  },
  header: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};

export default App;
