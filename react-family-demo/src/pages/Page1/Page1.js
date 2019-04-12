import React, {Component} from 'react';
import './Page1.css';

import image from './images/appstore-1.jpg';

export default class Page1 extends Component {
    render() {
        return (
            <div className={'page-box'}>
                this is page1 page
                <img src={image} width={400} height={600}/>
            </div>
        )
    }
}