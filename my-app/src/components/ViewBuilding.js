import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class ViewBuilding extends React.Component {
	render() {
		
		const {data, selectedBuilding} = this.props;
		const building = data[this.props.selectedBuilding-1];

		if (building){

			return(
				<Card style={{ width: '32rem' }}>
					<Card.Body>
						<Card.Title>{building.name}</Card.Title>
						
						<Card.Subtitle className="mb-2 text-muted">{building.code}</Card.Subtitle>
						
						<Card.Text>
						Address: 	{building.address ? building.address : null}
						</Card.Text>

						<Card.Text>
						Longitude: 	{building.coordinates ? building.coordinates.longitude : null}
						</Card.Text>

						<Card.Text>
						Latitude: 	{building.coordinates ? building.coordinates.latitude : null}
						</Card.Text>

					</Card.Body>
					</Card>
			);
			


		}
		else{
			return (
				<div>
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				</div>
			);
		}

	}
}
export default ViewBuilding;
