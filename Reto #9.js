function countTime(leds) {
	const ledsNumer = leds.length
//	console.log(leds)
	let ledsAtOneMoment = [...leds]
	let ledsOn = leds.every(led => led === 1)
	let count = 0, i = 0
	while(ledsOn === false) {
		if(i === 0) {
			const lastLed = [...leds].pop()
			if(leds[i] === 0 && lastLed === 1) ledsAtOneMoment[0] = 1
		}
		else ledsAtOneMoment[i] = leds[i - 1] === 1 ? 1 : leds[i]
		i += 1
		if(i === ledsNumer) {
			leds = [...ledsAtOneMoment]
			i = 0
			count += 1
//			console.log(leds)
			ledsOn = leds.every(led => led === 1)
		}
	}
	return count * 7
}

const resp1 = countTime([0, 1, 1, 0, 1])
const resp2 = countTime([0, 0, 0, 1])
const resp3 = countTime([0, 0, 1, 0, 0])
const resp4 = countTime([1, 0, 0, 1, 0, 0])
const resp5 = countTime([0, 0, 0, 1, 0, 0, 1, 0, 0, 0])
//console.log('resp1', resp1)
//console.log('resp2', resp2)
console.log('resp3', resp3)
console.log('resp4', resp4)
console.log('resp5', resp5)


function countTime2(leds) { // lo encontre por yt xd
	let lista = leds.join('').split('1')
	lista[0] += lista.pop()
	return Math.max(...lista.map(x => x.length)) * 7
}

//console.log(countTime2([0, 1, 1, 0, 1]))
//console.log(countTime2([0, 0, 0, 1]))
//console.log(countTime2([0, 0, 1, 0, 0]))
//console.log(countTime2([1, 0, 0, 1, 0, 0]))


//* Mi solucion segun la que encontré en yt
function countTime3(leds) {
	const zerosCountList = []
	let i = 0
	leds.forEach(led => {
		if(led === 0) i += 1
		if(led === 1) {
			zerosCountList.push(i)
			i = 0
		}
	})
	zerosCountList.push(i)
	console.log(zerosCountList)
	const lastCount = [...zerosCountList].pop()
	let ciclesNumber = Math.max(...zerosCountList)
	if(lastCount > 0) {
		const posibleCiclesNumber = zerosCountList[0] + lastCount
		if(posibleCiclesNumber > ciclesNumber) {
			ciclesNumber = posibleCiclesNumber
		}
	}
	return ciclesNumber * 7
}

console.log('resp1v2.0', countTime3([0, 1, 1, 0, 1]))
console.log('resp2v2.0', countTime3([0, 0, 0, 1]))
console.log('resp3v2.0', countTime3([0, 0, 1, 0, 0]))
console.log('resp4v2.0', countTime3([1, 0, 0, 1, 0, 0]))
console.log('resp5v2.0', countTime3([0, 0, 0, 1, 0, 0, 1, 0, 0, 0]))