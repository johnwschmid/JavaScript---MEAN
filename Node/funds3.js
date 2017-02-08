// var person = {
// 	name: 'John',
// 	distancetraveled: 0,
// 	sayname : function(){
// 		console.log(person.name);
// 	},
// 	speak : function(param){
// 		console.log(person.name + ' says: ' + param);
// 	},
// 	walk : function(){
// 		person.distancetraveled += 3;
// 		console.log(person.name + ' has traveled ' + person.distancetraveled + ' miles.')
// 		return person;
// 	},
// 	run : function(){
// 		person.distancetraveled += 10;
// 		console.log(person.name + ' has traveled ' + person.distancetraveled + ' miles.')
// 		return person;
// 	},
// 	crawl : function(){
// 		person.distancetraveled += 1;
// 		console.log(person.name + ' has traveled ' + person.distancetraveled + ' miles.')
// 		return person;
// 	}
// }

// person.sayname();

function ninjaConstructor(name, cohort){
	var ninja = {}
	var belts = ['yellow','red','black']
	ninja.name = name;
	ninja.cohort = cohort;
	ninja.beltlev = 0
	ninja.levelup = function (){
		if(ninja.beltlev < 2){
			ninja.beltlev += 1;
			ninja.belt = belts[ninja.beltlev]
		}
		return ninja
	}
	ninja.belt = belts[ninja.beltlev];
	console.log(ninja.name + ' from the ' + ninja.cohort + ' cohort is a ' + ninja.belt + ' belt.')
	return ninja;
}

ninjaConstructor('James', 'Alpha');