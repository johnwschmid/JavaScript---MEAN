// Part 1:
x = [3,5,'Dojo','Rocks','Michael','Sensei']
x.push(100);

x = ['hello','world','JavaScript is Fun']

for (var i in x)
	console.log(x[i]);

// Part 2:
var sum = 0

for(var i = 0; i < 501; i++)
	sum = sum + i
console.log(sum);

// Part 3:
arr = [1,5,90,25,-3,0]
var lowest

for(var i = 0; i < arr.length; i++)
	if(arr[i] < lowest)
		lowest = arr[i]
console.log(lowest)

// Part 4:
arr = [1,5,90,25,-3,0]
var avg = 0

for(var i = 0; i < arr.length; i++)
	avg = avg + arr[i];
avg = avg/arr.length;
console.log(avg);

// Part 5:
var ninja = {
	name: 'Jessica',
	profession: 'Coder',
	favorite_language: 'JavaScript',
	dojo: 'Dallas'
}
for (var key in ninja) {
	if (ninja){
		console.log(key)
		console.log(ninja[key])
	}
}