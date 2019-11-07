import React from 'react';
import Button from 'react-bootstrap/Button';

class RemoveBuilding extends React.Component {
    
    render(){

        return(
            <Button 
            onClick={this.props.removeOne}
            variant="danger">
                Remove
            </Button> 
        );
        
    }

}

export default RemoveBuilding;