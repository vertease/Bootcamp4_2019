import React from 'react';
import Button from 'react-bootstrap/Button';

class AddBuilding extends React.Component {
    
    render(){
        return(
            <Button 
            onClick={this.props.addOne}
            variant="info">
                
                Add
            
            </Button>
        );
    }

}

export default AddBuilding;