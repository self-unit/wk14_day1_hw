import React, { Component } from 'react';
import '../CSS/Style.css';

class Button extends Component {

    render(){
        return(
            <div className="button">
                <a href="https://www.imdb.com/calendar/?region=gb">View more upcoming releases >></a>
            </div>
        )
    }
}

export default Button;