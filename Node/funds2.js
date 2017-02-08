// var sum = 0

// function add(arg, arg1){
// 	for(var i = arg; i <= arg1; i++)
// 		sum += i;
// 	return console.log(sum);
// }

// add(5,7);

// function min(arr){
// 	if(arr){
// 		var lowestnum = arr[0];
// 		for(var i = 1; i < arr.length; i++){
// 			if (arr[i] < lowestnum)
// 				lowestnum = arr[i]
// 		}
// 	return console.log(lowestnum);
// 	}
// }
// min(array);

// array = [40,8,-7,1,32];

// function avg(arr){
// 	if(arr){
// 		var sum = 0
// 		for(var i = 0; i < arr.length; i++){
// 			sum += arr[i];
// 		}
// 		var avg = sum / (arr.length);
// 		return console.log(avg);
// 	}
// }

// avg(array);

var person = {
	name: 'John',
	distancetraveled: 0,
	sayname : function(){
		console.log(person.name);
	},
	speak : function(param){
		console.log(person.name + ' says: ' + param);
	},
	walk : function(){
		person.distancetraveled += 3;
		console.log(person.name + ' has traveled ' + person.distancetraveled + ' miles.')
	},
	run : function(){
		person.distancetraveled += 10;
		console.log(person.name + ' has traveled ' + person.distancetraveled + ' miles.')
	},
	crawl : function(){
		person.distancetraveled += 1;
		console.log(person.name + ' has traveled ' + person.distancetraveled + ' miles.')
	}
}

person.speak('Ello mate!');
person.walk();
person.run();
person.crawl();