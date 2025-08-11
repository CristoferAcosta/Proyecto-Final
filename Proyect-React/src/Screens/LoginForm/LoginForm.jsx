import React, { useState } from 'react';
import './LoginForm.css';
import { Link } from 'react-router';

const LoginForm = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === '' || password === '') {
            setError("Todos los campos son obligatorios");
            return;
        }

        if (username !== 'admin' || password !== '1234') {
            setError("Usuario o contraseña incorrectos");
            return;
        }

        setError(false);
        setUser([username]);
        setLoggedIn(true); // Login exitoso
    };

    return (
        <div className='home-page'>
            <h1 className='title'>¡Bienvenido al Museo!</h1>
            <div className="login-form">
                <h2 className='sub_title'>Login</h2>
                <form className='login' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    {error && <span>{error}</span>}

                    {
                        loggedIn
                        ? <Link to="/Invitado"><button type="button">Entrar</button></Link>
                        : <button type="submit">Login</button>
                    }
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
