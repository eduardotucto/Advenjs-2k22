function checkPart(part) {
	const possibleWords = [part]
	for(let i = 0; i < part.length; i++) {
		const wordInLetters = part.split('')
		delete wordInLetters[i]
		possibleWords.push(wordInLetters.join(''))
	}
	return possibleWords.some(word => {
		const reversedWord = word.split('').reverse().join('')
		return word === reversedWord
	})
}
const isAValidPart = checkPart("midu")
console.log(isAValidPart)