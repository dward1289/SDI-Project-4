//Given a string version of a number such as "42", return the value as an actual Number, such as 42.
//Insert any number as a string within the parseFloat(), and that number in the string will have its actual value.
var realNum = function (n) {
	console.log(parseInt(n));
	}

//Formats a number to use 2 decimal places.
//Insert any number in the decimal().
var decimal = function (n) {
	var num = n;
	num.toFixed(2);
	console.log(num.toFixed(2));
	};

//Finds the total value of just the numbers in an array, even if some of the items are not numbers.
//Returns the value of the sum as it continues to add up the parts of the array that are numbers.
var arrayTotal = function (n) {
	var sum = 0;
	for (var i = 0; i < n.length; i++) {
		if (!isNaN(parseInt(n[i]))) {
			sum += n[i];
			}
	console.log((sum));
	}
	};
		




