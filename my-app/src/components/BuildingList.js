import React from 'react';
import Button from 'react-bootstrap/Button';

class BuildingList extends React.Component {
	
	render() {
		const { data, filterText, selectedUpdate, RemoveBuilding} = this.props;


		const buildingList = data
			.filter(name => {
				return name.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr key={directory.id}
						onClick={
							() => selectedUpdate(directory.id)
						}
					>
						<td>{directory.code} </td>
						<td> {directory.name} </td>

						<Button
						variant="outline-secondary"
						onClick={
							() => RemoveBuilding(directory.id)}>
							Remove
						</Button>
					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
