//1. Napisati funkciju koja prima broj od 1-10.
// Unutar funkcije generisati nasumičan broj (Math.random) od 1-10 i ispisati korisniku da li je pogodio broj ili ne.

function guessTheNumber(num){
	var randomNumber = Math.floor(Math.random() * 9 + 1);  
	if(num < randomNumber){
	console.log("Your guess is lower. My guess is " + randomNumber);
	}else if(num > randomNumber){
		console.log("Your guess is higher. My guess is " + randomNumber);
	}else{
		console.log("You guessed the number");
	}
}

guessTheNumber(9);

//2. Napisati funkciju koja prima 4 broja, posebno sabira pozitivne, posebno negativne i vraća njihov proizvod
// (pozitivni * negativni)

// Duze resenje:

// function calc(arrayOfNumbers){
// 	var positive = [];
// 	var negative = [];
// 	var sumOfPositive = 0;
// 	var sumOfNegative = 0; 

// 	for(var i = 0; i < arrayOfNumbers.length; i++){
// 		if(arrayOfNumbers[i] < 0){
// 			negative.push(arrayOfNumbers[i]);
// 		}else{
// 			positive.push(arrayOfNumbers[i]);
// 		}
// 	}
// 	for(var i = 0; i < positive.length; i++){
// 		sumOfPositive += positive[i];
// 	}

// 	for(var i = 0; i < negative.length; i++){
// 		sumOfNegative += negative[i];
// 	}

// 	var result = sumOfPositive * sumOfNegative;

// 	console.log("Result is " + result);
// }

// calc([-2, 5, 10, -4]);

// Skraceno: 

function calc(arrayOfNumbers){
	var sumOfPositive = 0;
	var sumOfNegative = 0;

	for(var i = 0; i < arrayOfNumbers.length; i++){
		if(arrayOfNumbers[i] >=0 ){
			sumOfPositive += arrayOfNumbers[i];
		}else{
			sumOfNegative += arrayOfNumbers[i];
		}
	}

	var result = sumOfPositive * sumOfNegative;
	console.log("Result is " + result);
}

calc([-2, 5, 10, -4]);

//3. Napisati funkciju koja prima niz kao parameter i sabira prvi i poslednji element niza. Funkcija treba da podržava niz bilo koje 
//veličine. 


function sumFirstLast(nums){
	if(nums.length === 0 || nums.length === 1 || nums === undefined || nums === null){
		console.log("You provided invalid data.");
		return false;
	}

	var res = 0;
	res = nums[0] + nums[nums.length-1];

	console.log("Sum of the first and the last number of the array is " + res);
	return true;
}

sumFirstLast([1, 2, 3, 4]);

//4. Napisati funkciju koja prima niz brojeva i sabira poslednja tri. Funkcija treba da podržava niz bilo koje veličine.

function sumLastThree(numbersArray){
	var res = 0;
	if(numbersArray === undefined || numbersArray.length < 3 || numbersArray === null){
		console.log("Array must have at least three elements.");
		return false;
	}
	var numbersToSum = numbersArray.slice(-3);

	for(var i = 0; i < numbersToSum.length; i++){
		res += numbersToSum[i];
	}

	console.log("Sum of the last three numbers of the array is " + res);
	return true;
}

sumLastThree([5, 7, 9, 4, 2, 1]);

//5. Napisati funkciju koja prima niz i dva broja koji predstavljaju indexe. Zameniti vrednosti u nizu na datim indexima. 
//Primer: ako su indexi 3 i 10  potrebno je zameniti vrednosti niz[3] i niz[10]

function changeElementsOfTheArray(numArray, num1, num2){
	if(num1 > numArray.length - 1 || num2 > numArray.length -1){
		console.log("Provided index(es) is(are) not valid.");
	}
	var c = numArray[num1];
	numArray[num1] = numArray[num2];
	numArray[num2] = c;
	console.log(numArray);
}

changeElementsOfTheArray([3, 8, 16, 4, 57], 0, 2);

//6. Napisati funkciju koja prima niz i vraća drugi niz sa obrnutim redosledom elemenata, tako da je poslednji element u
// prvom nizu bude prvi element u poslednjem nizu, pretposlednji drugi, itd... 

function reverseArray(numArray){
	var reverseNumArray = [];

	for(var i = numArray.length - 1; i >= 0; i--){
		reverseNumArray.push(numArray[i]);
	}
	console.log(reverseNumArray);
}

reverseArray([15, 3, 9, 69, 100]);

//7. Napisati funkciju koja prima tri parametra. Prvi parametar treba da bude niz brojeva, drugi parametar početni index 
//i drugi krajnji index. Sabrati elemente niza od početnog do krajnjeg indexa.

function sumNumbersFromRange(numArray, num1, num2){
	if(num1 > num2){
		console.log("First index must be lower than the second.");
		return false;
	}
	var newNumArray = numArray.slice(num1, num2+1);
	var sum = 0;
	for(var i = 0; i < newNumArray.length; i++){
		sum += newNumArray[i];
	}

	console.log("Sum of numbers from the given range is " + sum);
	return true;
}

sumNumbersFromRange([10, 33, 77, 50, 9, 17, 3, 120], 2, 5);

//Napisati funkciju koja prima niz brojeva i vraća najveći proizvod dva susedna elementa niza.

function findBiggestResult(numArray){
	var max = numArray[0] * numArray[1];
	var res;

	for(var i = 1; i < numArray.length-1; i++){
		res = numArray[i] * numArray[i+1];
		if(max < res){
			max = res;
		}
	}

	console.log("Max result is " + max);
}

findBiggestResult([1, 2, 3, 4, 5, 6]);

//2. Napisaati funkciju koja prima niz stringova kao parametar. Proći kroz sve elemente niza i za svaki string proveriti da li 
//sadrži neki broj u sebi. Ako sadrži, ispisati vrednost tog stringa i tekst “string sadrži broj”, a u suprotnom vrednost stringa
// i tekst “string ne sadrži broj”.

function checkIfHasNumber(arrayOfWords){
	for(var j = 0; j < arrayOfWords.length; j++){
		var containsNumber = false;
		var word = arrayOfWords[j].replace(" ", "");
		var arrayOfCharacters = word.slice("");
		for(var i = 0; i < arrayOfCharacters.length; i++){
			if(!isNaN(arrayOfCharacters[i])){
				containsNumber = true;
			}
		}

		if(containsNumber == true){
			console.log("String '" + arrayOfCharacters + "' contains a number.");
		}else{
			console.log("String '" + arrayOfCharacters + "' does not contain a number.");
		}
	}
}

checkIfHasNumber(['no-numbers-here', 'time2time', "258", ' ', 'me2', '10littleindians', 'just-letters']);
