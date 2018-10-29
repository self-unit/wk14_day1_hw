import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

    render(){
        const listElements = this.props.data.map (item => {
            return(
                <ListItem key={item.id}
                link={item.url}>{item.name}</ListItem>
            )
        })
        return(
            <div className="list-heading">
                {listElements}
            </div>
        )
    }
}

export default List;