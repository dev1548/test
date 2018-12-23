import React, {Component, Fragment} from 'react';
import './AuthorizationForm.css';
import axios from 'axios';
import Form from './Form/Form';
import Layout from './Layout/Layout';

export const {
    Consumer: AuthorizationConsumer,
    Provider: AuthorizationProvidir,
} = React.createContext('');

export default class AuthorizationForm extends Component {
    state = {
        login: '',
        password: '',
        flagaut: false,
        flagspan: false

    };


    inputOnChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    };


    buttonOnClick = () => {
        let {login, password} = this.state;

        axios.get('http://192.168.1.139/authorization/', {
            params: {
                userLogin: login,
                userPassword: password
            }
        }).then((response) => {
            const {data} = response;
            if (data === "1") {
                this.setState({
                    flagaut: false,
                    flagspan: false
                });
            } else {
                this.setState({
                    login: '',
                    password: '',
                    flagspan: true
                })
            }
        });
    };

    logaut = () => {
        this.setState({
            login: '',
            password: '',
            flagaut: true,
            flagspan: false
        });
    };


    render() {
        const {login, password, flagaut, flagspan} = this.state;
        return (
            <AuthorizationProvidir value={{
                login,
                password,
                buttonOnClick: this.buttonOnClick,
                inputOnChange: this.inputOnChange,
                logaut: this.logaut
            }}>
                <Fragment>
                    {flagaut ? <Form/> : <Layout/>}
                    {flagspan && <span>неверный логин или пороль</span>}
                </Fragment>
            </AuthorizationProvidir>)
    }

}