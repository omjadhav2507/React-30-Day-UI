import { useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState("");

  const calculateStrength = () => {
   
    const strength = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      digit: /\d/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

   
    const strengthScore = Object.values(strength).filter(Boolean).length;

    return {
      strength,
      strengthScore,
    };
  };

  const getColor = (score) => {
    if (score >= 3) return "green";
    if (score === 2) return "orange";
    return "red";
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const { strength, strengthScore } = calculateStrength();



  return (
    <>
    <div>
      <label htmlFor="passwordInput">Password:</label>
      <input
        type="password"
        id="passwordInput"
        value={password}
        onChange={handlePasswordChange}
      />

      <div style={{ marginTop: "10px" }}>
        <div>
          <strong>Strength:</strong> {strengthScore}/5
        </div>

        <div style={{ color: getColor(strengthScore) }}>
          {strength.length && <div>✓ Contains at least 8 characters</div>}
          {strength.uppercase && (
            <div>✓ Contains at least one uppercase letter</div>
          )}
          {strength.lowercase && (
            <div>✓ Contains at least one lowercase letter</div>
          )}
          {strength.digit && <div>✓ Contains at least one digit</div>}
          {strength.specialChar && (
            <div>✓ Contains at least one special character</div>
          )}
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
