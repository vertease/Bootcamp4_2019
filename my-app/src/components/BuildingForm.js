import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import AddBuilding from './AddBuilding';
import RemoveBuilding from './RemoveBuilding';

class BuildingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          inputName: '',
          inputCode: '',
          inputAddy: '',
          inputLat: '',
          inputLong: ''
        };  
      }

    addOne() {
      this.props.AddBuilding(this.state)
    }

    changeHandler(input) {
        this.setState({
            [input.id]: input.value
        });
    }
    
    render() {
        return (
            <div className="column3">
        

          <InputGroup onChange={(e) => {this.changeHandler(e.target)}}>
            <InputGroup.Prepend>
              <InputGroup.Text> Name </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inputName" as="textarea" aria-label="With textarea" />
          </InputGroup>

          <InputGroup onChange={(e) => {this.changeHandler(e.target)}}>
            <InputGroup.Prepend>
              <InputGroup.Text> Code </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inputCode" as="textarea" aria-label="With textarea" />
          </InputGroup>

          <InputGroup onChange={(e) => {this.changeHandler(e.target)}}>
            <InputGroup.Prepend>
              <InputGroup.Text> Address </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inputAddy" as="textarea" aria-label="With textarea" />
          </InputGroup>

          <InputGroup onChange={(e) => {this.changeHandler(e.target)}}>
            <InputGroup.Prepend>
              <InputGroup.Text>Latitude</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inputLat" as="textarea" aria-label="With textarea" />
          </InputGroup>

          <InputGroup onChange={(e) => {this.changeHandler(e.target)}}>
            <InputGroup.Prepend>
              <InputGroup.Text>Latitude</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inputLong" as="textarea" aria-label="With textarea" />
          </InputGroup>


          {/*  ADD BUILDING FUNCTIONALITY */}
            <Button 
            onClick={this.addOne.bind(this)}
            variant="info">
                
                Add
            
            </Button>

          
        </div>
        );
    }

}

export default BuildingForm;