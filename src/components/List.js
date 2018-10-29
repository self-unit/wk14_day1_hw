import React, { Container } from 'react';
import ListItem from './ListItem';

class List extends Container {

    render(){
        return(
            <div className="list-heading">
                <h2>This is a heading</h2>
                <ListItem />
            </div>
        )
    }
}

export default List;