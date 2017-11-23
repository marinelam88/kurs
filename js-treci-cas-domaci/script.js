//prvi zadatak:

function checkIfOddOrEven(){
	for(var i = 1; i <= 10; i++){
		if(i % 2 == 0){
			console.log("Number " + i + " is even");
		}else{
			console.log("Number " + i + " is odd");
		}
	}
}

checkIfOddOrEven();

//drugi zadatak:

function sumNumbers(){
	var sum = 0;
	for(i=0; i<=10; i++){
		sum+=i;
	}
	console.log("Sum of first 10 numbers is " + sum);
}

sumNumbers();

//treci zadatak 

function calcFactoriel(){
	var res = 1;
	for(var i = 1; i <= 6; i++){
		res *= i;
	}
	console.log("Factoriel of the given number is " + res);
}

calcFactoriel();


//treci zadatak funkcija sa parametrima:

function calculateFactoriel(a){
	var result = 1;
	for(var i = 1; i<=a; i++){
		result *= i;
	}
	console.log("Factoriel of the given number is " + result);
}

calculateFactoriel(5);

//cetvrti zadatak

function numberOfItems(){
	var availableAmountOfMoney = 325;
	var price = 14;
	var amount = availableAmountOfMoney/price;
	console.log("You can buy " + Math.round(amount) + " items.");
}

numberOfItems();

