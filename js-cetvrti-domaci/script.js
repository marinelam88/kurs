//prvi zadatak

var priceArray = [5, 145, 69, 56, 13, 456, 78, 4, 30]
var price;
var sum = 0;
for(var i = 0; i<priceArray.length; i++){
	if(priceArray[i] < 50){
		price = priceArray[i] * 1.08;
	}else{
		price = priceArray[i] * 1.18;
	}
	sum += price;
}

console.log("Sum of prices with tax is " + sum);

//drugi zadatak

function checkIfPalindrom(wordToCheck){
	var isPalindrom = true;
	var wordToCheckArray = wordToCheck.split("");
	for(var i = 0; i < wordToCheckArray.length/2; i++){
		if(wordToCheckArray[i] !== wordToCheckArray[wordToCheckArray.length - 1 - i]){
			isPalindrom = false;
			break;
		}
	}
	if(isPalindrom === true){
		console.log("Word is a palindrom.");
	}else{
		console.log("Word is not a palindrom.");
	}
}

checkIfPalindrom("kapak");
