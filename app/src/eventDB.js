let mongoose = require('mongoose');

const model = mongoose.model(
	'Event',
	mongoose.Schema({
		name: {type: String, required:true},
		location: {type: String, required:true},
		time: {type: String, required:true},
	})
);



function EventDB(){
	this.get = async () => model.find({});
	this.add = async event => (new model(event).save(), console.log(this.get()));
}

let eventDB = new EventDB();

module.exports = eventDB;
