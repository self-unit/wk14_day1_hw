import React, { Component } from 'react';
import '../CSS/Style.css';

class ListItem extends Component{

    render(){
        return(
            <ul className="list-item">
                <li><a href={this.props.link}>{this.props.children}</a></li>
            </ul>
        )
    }
}

export default ListItem;