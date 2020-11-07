/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from 'react';
import img1 from './img/layout.png';
import './css/login.css';

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
                                <h2> Conecte-se </h2>
                                <br/>
                                <div className="inputBox">
                                    <input className="MyBt" type="text" name="username"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  />
                                    
                                    <label>Usuário: </label>
                                </div>
                                <br/>
                                <div className="inputBox">
                                    <input className="MyBt" type="password" name="password" 
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                    <label>Senha: </label>
                                </div>
                                <input className="light-blue darken-4" type="button" name="login"  value="Entrar" />
                            </form>
                      
            <div className="col s3"></div>
            <div className="col s6">
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
                        className="waves-effect waves-light btn"
                        onClick={handleLogin}
                        > <i class="material-icons left">cloud</i>
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
                <div className="col s3"></div>
            </div>
            </div>
            </Fragment>
    )
}

export default Login;