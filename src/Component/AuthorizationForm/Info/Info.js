import React, {Component} from 'react';
import axios from 'axios';

export default class Info extends Component{
    state = {
        load:!1,
        allCount:'0',
        green: '0',
        red: '0',
        black: '0',
        white: '0'
    };

    componentDidMount(){
        axios.get('http://192.168.1.139/info/')
            .then((response) => {
                const {data} = response;
                this.setState({
                    load:!0,
                    allCount: data.allCount,
                    green: data.green,
                    red: data.red,
                    black: data.black,
                    white: data.white
                });
            })
    }

    render(){
        const {load, allCount, green, red, black, white} = this.state;
        return (
            <div>
                <h2>Информация о текущегм товаре</h2>
                <p>Всего видов удочек {load ? allCount : 'Загрузка'}</p>
                <p>Зеленых удочек {load ? green : 'Загрузка'}</p>
                <p>Красных удочек {load ? red : 'Загрузка'}</p>
                <p>Черных удочек {load ? black : 'Загрузка'}</p>
                <p>Белых удочек {load ? white : 'Загрузка'}</p>
            </div>
        )
    }
}