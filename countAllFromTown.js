function countAllFromTown(regNumbers, townCode) {
    
    var regNumbersArray = regNumbers.split(',');

   
    var count = 0;

    
    for (var i = 0; i < regNumbersArray.length; i++) {
        var regNumber = regNumbersArray[i].trim(); 
        if (regNumber.startsWith(townCode)) {
            count++; 
        }
    }

    return count;
}