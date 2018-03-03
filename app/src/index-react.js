var React = require('react');
var ReactDOM = require('react-dom');
import {EventList} from './components/EventList';


ReactDOM.render(<EventList events={[
	{name:'name', location:'eac', time: 'aeuaeu' },
	{name:'name22', location:'eac', time: 'aeuaeu' }
]}/>,document.getElementById("react"));
