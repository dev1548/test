import React, {Component} from 'react';
import {AuthorizationConsumer} from '../AuthorizationForm'
import Selected from '../Selected/Selected';

export default class Info extends Component {
    render() {
        return (
            <AuthorizationConsumer>{({logaut}) => (
                <div>
                    <form action="http://192.168.1.139/upload/" method="post" encType="multipart/form-data">
                        <div>
                        <input type="file" name="img"/>
                        <Selected/>
                        </div>
                        <div>
                       <label> цена <input name="price" type="text"/></label>
                        <label> количество<input name="count" type="text"/></label>
                        <button type="submit">отправить</button>
                        </div>
                    </form>
                    <button onClick={logaut}>выйти</button>
                </div>
            )}</AuthorizationConsumer>
        )

    }
}
