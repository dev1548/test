import React, {Component, Fragment} from 'react';
import {AuthorizationConsumer} from '../AuthorizationForm'



export default class Form extends Component {
    render() {
        return (
            <AuthorizationConsumer>{({login, password, buttonOnClick, inputOnChange})=>(
                <div>
                    <input onChange={inputOnChange} className="authorizationForm__name" name="login" type="text"
                           value={login}/>
                    <input onChange={inputOnChange} className="authorizationForm__password" name="password"
                           type="password" value={password}/>
                    <button onClick={buttonOnClick} type="button">Войти</button>
                </div>
            )}</AuthorizationConsumer>)
    }
}
