var React = require('react');
var ReactDOM = require('react-dom');
import {EventList} from './components/EventList';


fetch( '/events' )
.then( response => response.json())
.then( json => ReactDOM.render(
	<EventList events={json}/>,
	document.getElementById("react")
));
