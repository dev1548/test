import React, {Component} from 'react';
import consSelect from '../../const/consSelect';

export default class Selected extends Component {

    render (){
        let option = consSelect.map((item)=>{
        return <option key={item.id} value={item.colore}>{item.colore}</option>});
        return(
            <select name="color">
                {option}
            </select>
        )
    }
}