import React, { Container } from 'react';

class Button extends Container {

    render(){
        return(
            <div className="button">
                <button>View more upcoming releases >></button>
            </div>
        )
    }
}

export default Button;