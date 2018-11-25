import React, {Component} from 'react';
import axios from 'axios';

export default class Goods extends Component {
    state = {
        price: this.props.price,
        oldPrice: this.props.price,
        rent: 0

    };

    discount = (event) =>{
        const {price, oldPrice} = this.state;
        let count = parseInt(event.target.value);
        if (count >= 3){
            this.setState({
                price:price-(price/100*15),
                rent: count
            })
        } else{
            this.setState({
                price: oldPrice,
                rent: count
            })
        }
    };

    rent =()=>{
        axios.get('http://192.168.1.139/rent/', {
            params: {
                id: this.props.id,
                count: this.state.rent
            }
        })
    };

    render() {
        const {price}= this.state;
        return (
            <div>
                <a href={`http://192.168.1.139/${this.props.urlBig.replace('../', '')}`} target="_blank">
                    <img src={`http://192.168.1.139/${this.props.urlSmoll.replace('../', '')}`} alt={this.props.name}/>
                </a>
                <p>цвет {this.props.colore}</p>
                <p>цена {price}</p>
                <button onClick={this.rent}>арендовать</button>
                <label>Количество <input onChange={this.discount} type="text"/></label>
            </div>
        )
    }
}
