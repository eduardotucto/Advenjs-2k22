function getGiftsToRefill(a1, a2, a3) {
	const arr1 = []
	const arr2 = []
	const arr3 = []
	const asdas = [[a1, arr1], [a2, arr2], [a3, arr3]]
	asdas.forEach(arr => {
		const [mainArray, acumulate] = arr
		mainArray.forEach(gift => {
			if (!acumulate.includes(gift)) acumulate.push(gift)
		})
	})
	const gifts = {}
	const uniqueGifts = [ ...arr1, ...arr2, ...arr3 ]
	uniqueGifts.forEach(gift => {
		const countGift = uniqueGifts.filter(gift2 => gift2 === gift)
		gifts[gift] = countGift.length
	})

	const giftsToRefill = []
	Object.entries(gifts).map(entry => {
		const [key, value] = entry
		if(value === 1) giftsToRefill.push(key)
	})
	return giftsToRefill
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']
const gifts = getGiftsToRefill(a1, a2, a3)
console.log(gifts)