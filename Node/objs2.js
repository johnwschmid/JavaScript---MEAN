function VehicleConstructor(name, wheels, speed){
	var distTrav = 0
	var updateDistTrav = function(){
		distTrav += speed;
	}

	this.name = name;
	this.wheels = wheels;
	this.speed = speed;
	this.passenger = 0;

	this.noise = function(){
		console.log(this.name + " makes a 'beep-beep' sound.")
	}
	this.move = function(){
		updateDistTrav();
		this.noise();
	}
	this.checkMiles = function(){
		console.log(distTrav + " miles taveled.");
	}
}

var Bike = new VehicleConstructor('Fixie', 2, 60);
Bike.noise = function(){
	console.log(Bike.name + " rings its bell, ring-ring!");
}
Bike.move();
Bike.checkMiles();

// var Volvo = new VehicleConstructor('Barney', 4);
// Volvo.noise = function(){
// 	console.log(Volvo.name + " honks its horn, honk-honk!");
// }
// Volvo.noise();

// var Bus = new VehicleConstructor('Skew Buh', 6);
// Bus.pickup = function(passengers){
// 	Bus.passenger += passengers;
// 	console.log(Bus.name + " now has " + Bus.passenger + " passengers.");
// }
// Bus.pickup(4);