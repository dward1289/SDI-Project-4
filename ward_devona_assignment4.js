//Given a string version of a number such as "42", return the value as an actual Number, such as 42.
//Insert any number as a string within the parseFloat(), and that number in the string will have its actual value.
var realNum = function (n) {
	console.log(parseFloat(n));
	};

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
	}
	console.log("The total of the array is " + (sum) + ".");
	};


//Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the object.
//Sorts by name ascending.
//arrayname.sort(compare) would be an example.           
var firstName = function (a,b) {
  if (a.name < b.name)
     return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

//Does a string follow a 123-456-7890 pattern like a phone number?
//Enter the phone number in validate() as a string
var validate = function (phone) {
    var check = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (check.test(phone)) {
        console.log("Thank you for providing a phone number");
    } else {
        console.log("Please enter a valid phone number");
    }
}

//Title-case a string 
//Insert lower-case string in to makeTitle(), and the string will be converted in to a title string.
var makeTitle = function (n)
{
    return n.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}


//Examples of the functions are as follow: title-case, phone number validation, sort array objects, sum of an array, decimal format, and string with an actual value.

//Title-case a string example.
console.log(makeTitle("i love you"));

//Phone number validation example.
validate("980-200-7007");
validate("Am I a phone number?");

//Sort array objects by key example. Sorts by first name.
var criminal = [ {
		
		"name": "Smith Mills",
		"age": 24,
		"crime": "Break-in",
		"years": 4,
		"wanted": "Robbery",
		"warrants": 12
	},
	
	{
		"id": "1567",
		"name": "Tommy Connor",
		"age": 26,
		"crime": "Accessory",
		"years": 1,
		"wanted": "Robbery",
		"warrants": 2
	},
	
	{
		"id": "1778",
		"name": "James Lim",
		"age": 28,
		"crime": "Car Theft",
		"years": 1,
		"wanted": "Car Theft and Robbery",
		"warrants": 3
		}
		];
console.log(criminal.sort(firstName));
	
//The sum of an array example.
var numbers = [ 1, 4, "Who", 8, "What"];
arrayTotal(numbers);

//Formats number in to decimal. 4 will be 4.00 in this example.
decimal(4);

//Gives a string number actual number value. 5 * 5 = 25 in this example, showing that "5" has its actual value.
realNum("5" * 5);

           

 


				




