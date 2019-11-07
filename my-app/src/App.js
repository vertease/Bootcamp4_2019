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
      exists: true,
      buildingArray: []
    };
  }

  componentWillMount(){
    this.setState({
      ...this.state,
      buildingArray: this.props.data
    })
  }

  filterUpdate(value) {
    console.log("filterUpdate value: ", value)
    this.setState(
      {filterText: value}
    )
  }

  selectedUpdate(id) {
    console.log("selectedUpdate id: ", id)
    this.setState(
      {selectedBuilding: id}
    )
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
    this.state.buildingArray.push(b)
  }

  RemoveBuilding(id) {
    console.log(" id: ", id)
    const index = this.state.buildingArray.findIndex(building=> building.id===id)
    this.state.buildingArray.splice(index, 1)
  }



  render() {
    
    return (
      <div className="bg">

        <div className="row">
          <h1>UF Directory App</h1>
        </div>


        <BuildingForm
        AddBuilding={this.AddBuilding.bind(this)}
        />


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
                    data={this.state.buildingArray}
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
