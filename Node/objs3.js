function Vehicle(name, wheels, speed){
	var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";

	this.distTrav = 0
	this.name = name;
	this.wheels = wheels;
	this.speed = speed;
	this.passenger = 0;
	this.vin = createVin();

	function createVin(){
		var vin = '';
			for (var i = 0; i < 17; i+=1 ){
			  vin += chars[Math.floor(Math.random()*35)];
			}
		return vin;
	}

}


Vehicle.prototype.noise = function(){
	console.log(this.name + " makes a 'beep-beep' sound.")
	return this;
}
Vehicle.prototype.updateDistTrav = function(){
	this.distTrav += this.speed;
}
Vehicle.prototype.move = function(){
	this.updateDistTrav();
	this.noise();
	console.log("Vin#: " + this.vin);
	return this;
}
Vehicle.prototype.checkMiles = function(){
	console.log(this.distTrav + " miles taveled.");
	return this;
}


var Bike = new Vehicle('Fixie', 2, 40);
Bike.noise = function(){
	console.log(Bike.name + " rings its bell, ring-ring!");
}
Bike.move().checkMiles();

// var Volvo = new Vehicle('Barney', 4);
// Volvo.noise = function(){
// 	console.log(Volvo.name + " honks its horn, honk-honk!");
// }
// Volvo.noise();

// var Bus = new Vehicle('Skew Buh', 6);
// Bus.pickup = function(passengers){
// 	Bus.passenger += passengers;
// 	console.log(Bus.name + " now has " + Bus.passenger + " passengers.");
// }
// Bus.pickup(4);