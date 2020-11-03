/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img1 from './img/layout.png';

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSingup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;
    return (
        <section className="login">
            
            <div className="loginContainer">
            <img className="imgLogin" src={img1} />
                <label>Nome</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button
                        onClick={handleSingup}
                        > 
                            Cadastrar
                        </button>
                        <p>
                            Já tem uma conta ?
                            <span
                            onClick={() => setHasAccount(!hasAccount)}
                            >
                                Entrar
                            </span>
                        </p>
                        </>
                    ) : (
                        <>
                        <button
                        onClick={handleLogin}
                        > 
                            Entrar
                        </button>
                        <p>
                            Não tem um conta ?
                            <span
                            onClick={() => setHasAccount(!hasAccount)}
                            >
                                Cadastrar
                            </span>
                        </p>
                        </>                        
                    )}

                </div>
            </div>
        </section>
    )
}

export default Login;