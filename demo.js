var str = `one two three four five`;

function reverseString(string) {
	return string.split('').reverse().join('');
}
console.log(reverseString(str))