function processArray(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i] ** 2); 
        } else {
            result.push(arr[i] * 3);
        }
    }
    return result;
}
var numbers = [1, 2, 3, 4, 5];
var processedNumbers = processArray(numbers);
console.log(processedNumbers);




var strings = ["Hello", "World", "Doctors", "Books", "Love"];
var numbers = [1, 2, 3, 4, 5];
var processedNumbers = processArray(numbers); 
var formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);
function formatArrayStrings(strings, numbers) {
    var formattedStrings = [];
    for (var i = 0; i < strings.length; i++) {
        if (numbers[i] % 2 === 0) {
            formattedStrings.push(strings[i].toUpperCase());
            formattedStrings.push(strings[i].toLowerCase()); 
        }
    }
    return formattedStrings;
}
