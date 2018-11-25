import React, {Component} from 'react';
import axios from 'axios';
import Goods from './Goods'

export default class ShowRange extends Component {
    state = {
        range: []
    };

    componentDidMount() {
        axios.get("http://192.168.1.139/shou_range/").then((response) => {
            const {data} = response;
            this.setState({range: data});
        })
    }

    render() {
        const {range} = this.state;
        const allRange = range.map((item) => {
            return <Goods key={item.id} {...item}/>
        });
        return (
            <div>
                <h3>асортимемт</h3>
                {allRange}
            </div>
        )
    }
}