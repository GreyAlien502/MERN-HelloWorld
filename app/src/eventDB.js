let mongoose = require('mongoose');

const model = mongoose.model(
	'Event',
	mongoose.Schema({
		name: {type: String, required:true},
		location: {type: String, required:true},
		starttime: {type: Date, required:true},
		endtime: {type: Date, required:true}
	})
);



function EventDB(){
	this.get = async () => model.find({}).sort([['starttime', 'ascending']]);
	this.add = async event => (new model(event).save(), console.log(this.get()));
}

let eventDB = new EventDB();

module.exports = eventDB;
