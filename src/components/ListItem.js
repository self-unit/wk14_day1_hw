import React, { Container } from 'react';

class ListItem extends Container{

    render(){
        return(
            <div className="list-item">
                <h4>This is a list item</h4>
            </div>
        )
    }
}

export default ListItem;