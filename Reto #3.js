function distributeGifts(packOfGifts, reindeers) {
	let giftsWeight = 0
	let limitWeight = 0
	packOfGifts.forEach(gift => {
		giftsWeight += gift.length
	})
	reindeers.forEach(reindeer => {
		limitWeight += reindeer.length * 2
	})

	return Math.floor(limitWeight / giftsWeight)
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2