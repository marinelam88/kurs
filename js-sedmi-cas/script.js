var testObjekat = {
	naziv: "Startit kurs pravljenja sajtova",
	trajanjeNedelja: 33,
	predavac: {
		ime: "Petar",
		prezime: "Popovic",
	},
	ocenePolaznika: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
	organizacija: "Startit",
	kursJosTraje: true
};

var ratesCount = [
	{ rate_1: 0 },
	{ rate_2: 0 },
	{ rate_3: 0 },
	{ rate_4: 0 },
	{ rate_5: 0 },
	{ rate_6: 0 },
	{ rate_7: 0 },
	{ rate_8: 0 },
	{ rate_9: 0 },
	{ rate_10: 0 }
];

function courseRate(param){
	var stats = [];
	for(var i = 0; i < param.ocenePolaznika.length; i++){
		stats.push(param.ocenePolaznika[i] + "/10")
	}

	console.log(stats);
}

courseRate(testObjekat);

function ratesStats(param){
	for(var i = 0; i< param.ocenePolaznika.length; i++){
		var grade = param.ocenePolaznika[i];
		ratesCount[grade - 1]["rate_" + grade] +=1;
	}
	
	console.dir(ratesCount);
}

ratesStats(testObjekat);

function averageRate(param){
	var sum = 0;
	for(var i = 0; i < param.ocenePolaznika.length; i++){
		sum += param.ocenePolaznika[i];
	}

	var avg = sum/param.ocenePolaznika.length;
	console.log("Average rate of the course is " + avg.toFixed(2));
}

averageRate(testObjekat);

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
	}
];

function calcYearsOfExperience(param){
	var sumExperience = 0;
	for(var i = 0; i < param.length; i++){
		sumExperience += param[i].yearsExperience;
	}

	console.log("Sum of employees years of experience is " + sumExperience);
}

calcYearsOfExperience(people);

function experienceByDepartment(param){
	var expByDepartment = {};

	for(var i = 0; i< param.length; i++){
		if(expByDepartment[param[i].department] == undefined){
			expByDepartment[param[i].department] = 0;
		}
		expByDepartment[param[i].department] += param[i].yearsExperience;
	}

	console.log(expByDepartment);
}

experienceByDepartment(people);