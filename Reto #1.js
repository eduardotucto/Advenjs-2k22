function wrapping(gifts) {
	const wrap = '*'
	const resp = gifts.map(gift => {
		const wordLength = gift.length
		const upAndDownWrap = wrap.repeat(wordLength + 2)
		return `${upAndDownWrap}\n*${gift}*\n${upAndDownWrap}`
	})
	return resp
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)