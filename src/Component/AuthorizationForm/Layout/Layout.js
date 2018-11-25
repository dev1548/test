import React, {Component, Fragment} from 'react';

import Upload from '../Upload/Upload';
import Info from '../Info/Info';
import ShouRange from '../ShouRange/ShouRange';

export default class Layout extends Component {

    render() {
        return (
            <Fragment>
                <Upload/>
                <Info/>
                <ShouRange/>
            </Fragment>)

    }

}