import '../assets/Signup.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateInputs = () => {
        if (!isPasswordStrong(password)) {
            alert('Password must be of 8 characters with a mix of uppercase and lowercase characters.');
            return false;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return false;
        }

        return true;
    };

    const isPasswordStrong = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInputs()) {
            // Handle form submission
            console.log('Form submitted');
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>SIGNUP</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                </div>
                <div className='input-box'>
                  <input type="password"
                  
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
               </div>
               <div className='input-box'>
                  <input type="password"
                  
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                </div>
                <Link to="/login"><button type="submit" className="btn">
                    Signup
                </button></Link>
                <div className="register-Link">
                  <Link to="/login" ><p>Already have an account?<a>Login</a></p></Link>
                </div>
            </form>
        </div>
    );
};

export default Signup;
