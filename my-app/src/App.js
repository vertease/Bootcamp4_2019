import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import BuildingForm from './components/BuildingForm';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      removeIndex: 0,
      exists: true
    };
  }

  componentWillMount(){
    this.setState({
      ...this.state,
      data: this.props.data
    })
  }



  filterUpdate(value) {
    console.log("clicked value: ", value)
    this.setState(
      {filterText: value}
    )
  }

  selectedUpdate(id) {
    console.log("clicked id: ", id)
    this.setState(
      {selectedBuilding: id}
    )
  }

  RemoveBuilding(id) {
    console.log("remove id: ", id)
  }

  AddBuilding(building){

    const b = {
      id: this.props.data.length+1, 
      code: building.inputCode,
      name: building.inputName,
      address : building.inputAddy,
      coordinates: {
        latitude: building.inputLat,
        longitude: building.inputLong
      }

    }

    this.props.data.push(b)
  }

  RemoveBuilding(building){
    console.warn(building)
    // this.props.data = this.props.data.filter(building => building.id)
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>



        
        <BuildingForm
        AddBuilding={this.AddBuilding.bind(this)}
        RemoveBuilding={this.RemoveBuilding.bind(this)}
        >

        </BuildingForm>



      

        <Search
        filterText={this.state.filterText}
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            
         



            <div className="column1">
              
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    selectedBuilding={this.state.selectedBuilding}
                    RemoveBuilding={this.RemoveBuilding.bind(this)}
                    




                  />
                </table>
              </div>
            </div>
            
            
            <div className="column2">
              <ViewBuilding 
              data={this.props.data}
              selectedBuilding={this.state.selectedBuilding}
              />
            </div>
          
            
          </div>
          <Credit />
        
        
        </main>
      </div>
    );
  }
}

export default App;
