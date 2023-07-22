function getMaxGifts2(giftsCities, maxGifts, maxCities) { // my solution
	const giftsCitiesOrdered = giftsCities.sort((a, b) => b - a);
	const posibleResults = [];
	for (const _ of giftsCitiesOrdered) {
		let maxPosibleGifts = 0;
		let citiesVisited = 0;
		giftsCitiesOrdered.forEach((giftAmount) => {
			const newAmount = maxPosibleGifts + giftAmount;
			if (newAmount <= maxGifts && citiesVisited !== maxCities) {
				maxPosibleGifts += giftAmount;
				citiesVisited += 1;
			}
		});
		posibleResults.push(maxPosibleGifts)

		const reserva = giftsCitiesOrdered[0]
		giftsCitiesOrdered.shift()
		giftsCitiesOrdered.push(reserva)
	}
	const posibleResultsOredered = posibleResults.sort((a, b) => b - a);
	return posibleResultsOredered[0];
}

// console.log(getMaxGifts([11, 12, 7, 2, 5, 13, 3], 20, 2));
// getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
// console.log(getMaxGifts([50], 15, 1));
// console.log(getMaxGifts([50], 100, 1));
// console.log(getMaxGifts([50, 70], 100, 1));
// console.log(getMaxGifts([50, 70, 30], 100, 2));
// console.log(getMaxGifts([50, 70, 30], 100, 3));
// console.log(getMaxGifts([50, 70, 30], 100, 4));


function getMaxGifts(giftsCities, maxGifts, maxCities) { // solution found on twitter
	const filterCities = giftsCities.filter(el => el < maxGifts)
	if(filterCities.length === 0) return 0

	const maxElements = filterCities
	.sort((a, b) => b - a)
	.slice(0, maxCities)

	let maxSum = 0
	for (const el of maxElements) {
		maxSum += el
		if(maxSum > maxGifts) return maxGifts
	}
	return maxSum
}
console.log('RESP', getMaxGifts2([11, 12, 7, 2, 5, 13, 3], 21, 2)); // Debe ser 20
console.log(getMaxGifts2([50], 15, 1));
console.log(getMaxGifts2([50], 100, 1));
console.log('RESP2', getMaxGifts2([80, 80, 40], 150, 2)); // Debe ser 120
console.log(getMaxGifts2([50, 70, 30], 100, 2));
console.log(getMaxGifts2([50, 70, 30], 100, 3));
console.log(getMaxGifts2([50, 70, 30], 100, 4));