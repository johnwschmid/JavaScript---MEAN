function runningLogger(){
	console.log('I am running!')
}

function multByTen(val){
	val = val * 10;
	console.log(val);
}

function stringOne(){
	console.log('ONE BISH');
}

function stringTwo(){
	console.log('TWO BISH');
}

function caller(arg){
	if (typeof(arg) == 'function'){
		return arg();
	}
}

// caller(stringTwo);

function myDubCon(arg, arg1){
	if (typeof(arg) == 'function' && typeof(arg1) == 'function')
		return (arg(), arg1());
}

// myDubCon(stringOne, stringTwo);

function caller2(param){
	console.log('starting')

	setTimeout(function(){
		if(typeof(param) == 'function'){
			param(stringOne, stringTwo);
		}
	}
	, 2000);
	console.log('ending?');
	return ('interesting');
}

// caller2(myDubCon);