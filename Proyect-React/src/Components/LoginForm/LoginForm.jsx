import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form className='login' onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            {error && <span>Todos los campos son obligatorios</span>}
        </div>
    );
};

export default LoginForm;