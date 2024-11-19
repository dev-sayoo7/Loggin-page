import React, { useState } from 'react';
import './login.css';

function LoginForm() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form>
                <div className="input-container">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" placeholder="Enter your email" />
                </div>

                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="password-toggle-btn"
                        >
                            {showPassword ? "🙈" : "🐵"}
                        </button>
                    </div>
                </div>

                <input type="submit" value="Login" />
            </form>

            <footer>
                <mark>
                    <a href="#">Forgot your password?</a>
                </mark>
            </footer>
        </div>
    );
}

export default LoginForm;
