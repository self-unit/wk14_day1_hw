import React, { Component } from 'react';
import Button from '../components/Button';
import List from '../components/List';
class ViewContainer extends Component {

    render() {
        return(
            <div className="view-container">
                <List />
                <Button />
            </div>
        )
    }
}

export default ViewContainer;