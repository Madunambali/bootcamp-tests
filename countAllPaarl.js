function allPaarl(regNumbers) {
    var regNumbersArray = regNumbers.split(','); // Split the string into an array of registration numbers
    var results = [];

    for (var i = 0; i < regNumbersArray.length; i++) {
        var regNumber = regNumbersArray[i].trim(); // Trim any extra whitespace
        if (regNumber.startsWith('CJ')) {
            results.push(regNumber); // Add the Paarl registration numbers to results array
        }
    }

    return results;
}