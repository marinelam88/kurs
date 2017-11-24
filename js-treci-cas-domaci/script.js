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

// function sumNumbers(){
// 	var sum = 0;
// 	for(i=0; i<=10; i++){
// 		sum+=i;
// 	}
// 	console.log("Sum of first 10 numbers is " + sum);
// }

// sumNumbers();

//drugi zadatak sa parametrima

function sumNumbers(n){
	var sum = 0;
	for(i=0; i<=n; i++){
		sum += i;
	}
	console.log("Result is " + sum);
}

sumNumbers(12);

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

function numberOfItems(amountOfMoney, price){
	var items = amountOfMoney/price;
	console.log("You can buy " + Math.floor(items) + " items.");
}

numberOfItems(325, 125);

//peti zadatak

function sumOfNumbers(n, k){
	var value = 0;
	for(var i=n; i<=k; i++){
		value += i;
	}
	console.log("Result is " + value);
}


sumOfNumbers(-2, 10);
