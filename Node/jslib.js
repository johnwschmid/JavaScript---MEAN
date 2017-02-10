var schmidlib = {
    map: function(arr, callback) {
        result = [];
        for(var i = 0; i < arr.length; i++){
            result.push(callback(arr[i]));
        }
        console.log(result);
    },
    reduce: function(arr) {
        var newNum = 0;
        for(var i = 0; i < arr.length; i++){
            newNum += arr[i];
        }
        console.log("Combined Total: " + newNum);
    },
    find: function(arr, callback) {
        for(var i = 0; i < arr.length; i++){
            if(callback(arr[i]))
                return console.log(arr[i]);
        }
    },
    filter: function(arr, callback) {
        result = [];
        for(var i = 0; i < arr.length; i++){
            if(callback(arr[i]))
                result.push(arr[i]);
        }
        return console.log(result);
    },
    reject: function(arr, callback) {
        result = [];
        for(var i = 0; i < arr.length; i++){
            if(!callback(arr[i]))
                result.push(arr[i]);
        }
        return console.log(result);
    },
}

schmidlib.map([1,2,3], function(x){return x * 3});
schmidlib.reduce([2,3,4]);
schmidlib.reject([1,2,3,4,5,6], function(x){return x % 2 == 0});