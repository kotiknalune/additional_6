module.exports = function zeros(expression) {

	var getDigitsForMultiplication = function(number, exclamationCount) {
		var digits = [];
		while(number > 0) {
			digits.push(number);
			number = number - exclamationCount;
		}
		return digits.reverse(); // to match the order in task, rly doesnt mttr
	}

	var getExclamationCount = function(string) {
		var substrings = string.split("!");
		return substrings.length - 1;
	}

	var multiplyNumbersInArray = function(numbers) {
		var result = 1;
		for (var i = 0; i < numbers.length; i++) {
			result = result * numbers[i]
		}
		return result;
	}

	var getMultiplicationResults = function(string) {
		var result = [], numbersWithExclMarks = string.split('*');
		for (var i = 0; i < numbersWithExclMarks.length; i++) {
			var numberString = numbersWithExclMarks[i],
			exclamationCount = getExclamationCount(numberString),
			digitsToMultiply = getDigitsForMultiplication(parseInt(numberString), exclamationCount),
			multipliedDigits = multiplyNumbersInArray(digitsToMultiply);
			result.push(multipliedDigits);
		}
		return result;
	}

	var separateNumbersEvaluationResults = getMultiplicationResults(expression),
	stringEvaluationResult = multiplyNumbersInArray(separateNumbersEvaluationResults),
	numberOfZeroesAtTheEnd = 0;

	while (stringEvaluationResult % 10 == 0) {
		numberOfZeroesAtTheEnd++;
		stringEvaluationResult = stringEvaluationResult / 10;
	}

	return numberOfZeroesAtTheEnd;
}
