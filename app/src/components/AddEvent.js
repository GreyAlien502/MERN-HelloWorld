import React from 'react';

const addEvent = () => fetch(
	'/',
	{
		method: "POST",
		body: {
			name:     document.getElementById('name').value,
			location: document.getElementById('location').value,
			time:     document.getElementById('time').value,
		}
	}
).then(
	()=> window.location = '/',
	()=> alert('ono erro')
);

export const AddEvent = (props) => (<div>
	<h1>Add New Free Food Event</h1>
	<table>
		<tr>
			<th>Name</th>
			<th>Location</th>
			<th>Time</th>
		</tr>
		<tr>
			<th><input type="text" id="name"/></th>
			<th><input type="text" id="location"/></th>
			<th><input type="text" id="time"/></th>
		</tr>
		<tr>
			<th colSpan="3">
				<button
					id="save"
					onClick={addEvent}
				>
					SAVE
				</button>
			</th>
		</tr>
	</table>
</div>)//return
