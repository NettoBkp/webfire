/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import img1 from './img/layout.png';
import './css/login.css';
import './css/lg.css';

// <p className="errorMsg">{emailError}</p>

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
        <Fragment className="container">

            <div className="row">

                <form className="box">
                    <img className="imgLogo" src={img1} />
                    <p className="">{emailError}</p>

                    <br />
                    <div className="inputBox">
                        <input className="MyBt" type="text" name="username"
                            autoFocus
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <label>Usuário: </label>
                    </div>
                    <br />
                    <div className="inputBox">
                        <input className="MyBt" type="password" name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <label>Senha: </label>
                    </div>
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
                                        className="light-blue" type="button" name="login" value="Entrar"
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
                </form>               
            </div>
        </Fragment>
    )
}

export default Login;