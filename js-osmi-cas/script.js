var people = [
	{
		name: "Joe Schmoe",
		yearsExperience: 1,
		department: "IT"
	},
	{
		name: "Sally Sallerson",
		yearsExperience: 15,
		department: "Engineering"
	},
	{
		name: "Bill Billson",
		yearsExperience: 5,
		department: "Engineering"
	},
	{
		name: "Janet Janet",
		yearsExperience: 11,
		department: "Management"
	},
	{
		name: "Bob Hope",
		yearsExperience: 9,
		department: "IT"
	},
	{
		name: "John Doe",
		yearsExperience: 7,
		department: "Management"
	}
];

function employeesByDepartment(param){
	var departments = {
		Engineering: 0,
		IT: 0,
		Management: 0
	}

	for(var i = 0; i < param.length; i++){
		if(param[i].department == "Engineering"){
			departments.Engineering += 1;
		}else if(param[i].department == "IT"){
			departments.IT += 1;
		}else{
			departments.Management += 1;
		}
	}

	console.log(departments);
}

employeesByDepartment(people);

//napredno resenje:

function sortEmployees(param){
	var departments = {};

	for(var i = 0; i < param.length; i++){
		if(departments[param[i].department] == undefined){
			departments[param[i].department] = 0;
		}

		departments[param[i].department] += 1;
	}

	console.log(departments);
}

sortEmployees(people);

function sortEmployeesByExperience(param){
	var seniority = {
		Amateur: [],
		Expert: [],
		Newbie: [],
		Pro: []
	}

	for(var i = 0; i < param.length; i++){
		if(param[i].yearsExperience == 5){
			seniority.Amateur.push(param[i].name);
		}else if(param[i].yearsExperience > 10){
			seniority.Expert.push(param[i].name);
		}else if(param[i].yearsExperience < 5){
			seniority.Newbie.push(param[i].name);
		}else if(param[i].yearsExperience > 5 && param[i].yearsExperience <= 10){
			seniority.Pro.push(param[i].name);
		}
	}

	console.log(seniority);
}

sortEmployeesByExperience(people);


//treci zadatak

function allEmployees(param){
    var arrayOfEpmloyees = [];
    for(var i = 0; i < param.length; i++){
    	arrayOfEpmloyees.push(param[i].name);
    }

    console.log(arrayOfEpmloyees);
}

allEmployees(people);

//cetvrti zadatak

function multiplyEvenAndOdds(arrayOfNumbers){
	var newArray = [];
	var res;
	for(var i = 0; i < arrayOfNumbers.length; i++){
		if(arrayOfNumbers[i] % 2 == 0){
			res = arrayOfNumbers[i] * 3;
		}else{
			res = arrayOfNumbers[i] * 4;
		}
		newArray.push(res);
	}

	console.log(newArray);
}

multiplyEvenAndOdds([1, 6, 2, 5, 7, 2, 8, 3]);
multiplyEvenAndOdds([45, 62, 123, 63, 74, 85, 21, 77]);
multiplyEvenAndOdds([-6, 23, 10, 0, -22, 52, 86, 2]);

var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];


//peti zadatak

function getNumberOfElementsGreaterThan(arrayOfNumbers, limit){
	var counter = 0;
	for(var i = 0; i < arrayOfNumbers.length; i++){
		if(arrayOfNumbers[i] > limit){
			counter ++;
		}
	}

	console.log("Number of elements of array greater than given number is " + counter);
}

getNumberOfElementsGreaterThan([1, 6, 2, 5, 7, 2, 8, 3], 5);
getNumberOfElementsGreaterThan([45, 62, 123, 63, 74, 85, 21, 77], 47);
getNumberOfElementsGreaterThan([-6, 23, 10, 0, -22, 52, 86, 2], 3);

//sesti zadatak

function filterOutElements(arrayofNumbers, limit, direction){
	var newArray = [];
	for(var i = 0; i < arrayofNumbers.length; i++){
		if(!direction && arrayofNumbers[i] < limit){
			newArray.push(arrayofNumbers[i]);
		}else if(direction && arrayofNumbers[i] >= limit){
			newArray.push(arrayofNumbers[i]);
		}
	}

	console.log(newArray);
}

filterOutElements([1, 6, 2, 5, 7, 2, 8, 3], 5, true);

