import React from 'react';
let DateTime = require('react-datetime');
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';



class AddEvent extends React.Component{
	constructor(props){
		super(props);
		this.state={starttime:null,endtime:null};
	}
	render() {return (<div>
		<h1>Add New Free Food Event</h1>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Location</th>
					<th>Time</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th><input type="text" id="name"/></th>
					<th><input type="text" id="location"/></th>
					<th><DateTime id="starttime" onChange={value=>this.setState({starttime:value })}/></th>
					<th><DateTime id="endtime"   onChange={value=>this.setState({endtime:value })}/></th>
				</tr>
				<tr>
					<th colSpan="4">
						<button
							id="save"
							onClick={()=>this.addEvent()}
						>
							SAVE
						</button>
					</th>
				</tr>
			</tbody>
		</table>
	</div>)//return
	}
	addEvent() { return fetch(
		'/events',
		{
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( {
				name:     document.getElementById('name').value,
				location: document.getElementById('location').value,
				starttime:   this.state.starttime,
				endtime:     this.state.endtime
			})
		}
	).then(
		()=>window.location = '/',
		()=> alert('ono erro')
	); }
}

export {AddEvent};
