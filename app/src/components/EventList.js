import React from 'react';

var myProps;

let pad = number => ('0' + number).slice(-2);
let dateString = date => `${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][date.getDay()]} ${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${pad(date.getMinutes())}`;

function getRow(event, index)
{
	return <tr key = {index}>
		<th>{event.name}</th>
		<th>{event.location}</th>
		<th>{dateString(new Date(event.starttime))}</th>
		<th>{dateString(new Date(event.endtime))}</th>
	</tr>;
}

export const EventList = (props) => ( <div>
	<h1>SBU Free Eaters</h1>
	<h2>u wan sum fud?</h2>
	<a href = '/add'><button id = "addbtn">
	<h3>add a new event</h3></button></a>
	<table>
		<thead> <tr>
			<th>NAME</th>
			<th>LOCATION</th>
			<th>START TIME</th>
			<th>END TIME</th>
		</tr> </thead>
		<tbody>
			{props.events.map((x,y) => getRow(x,y))}
		</tbody>
	</table>
</div>);
