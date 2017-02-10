function VehicleConstructor(name, wheels){
	var car = {};

	car.name = name;
	car.wheels = wheels;
	car.passenger = 0;

	car.noise = function(){
		console.log(car.name + " makes a 'beep-beep' sound.")
	}

	return car;
}

var Volvo = VehicleConstructor('Barney', 4);
Volvo.noise = function(){
	console.log(Volvo.name + " honks its horn, honk-honk!");
}
Volvo.noise();

var Bike = VehicleConstructor('Fixie', 2);
Bike.noise = function(){
	console.log(Bike.name + " rings its bell, ring-ring!");
}
Bike.noise();

var Bus = VehicleConstructor('Skew Buh', 6);
Bus.pickup = function(passengers){
	Bus.passenger += passengers;
	console.log(Bus.name + " now has " + Bus.passenger + " passengers.");
}
Bus.pickup(4);