import React from 'react';

var myProps;

function getRow(event, index)
{
	return <tr key = {index}><th>{event.name}</th><th>{event.location}</th><th>{event.time}</th></tr>;
}

export const EventList = (props) => (
			<div><h1>U WAN SUM FUD?</h1><a href = '/add'><button id = "addbtn"><h3>add a new event</h3></button></a><table><tbody><tr><th>NAME</th><th>LOCATION</th><th>TIME</th></tr>{props.events.map((x,y) => getRow(x,y))}</tbody></table></div>
        )//return
