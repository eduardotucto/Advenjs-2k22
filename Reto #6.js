function createCube(size) {
	const espace = ' '
	const corner = '/\\';
	const cornerDown = '\\/';
	const part = '_\\'
	const downPart = '_/'
	const cubeUpLayers = []
	const cubeDownLayers = []
	for (let i = 1; i <= size; i++) {
		cubeUpLayers.push(`${espace.repeat(size - i)}${corner.repeat(i)}${part.repeat(size)}`)
		cubeDownLayers.push(`${espace.repeat(i - 1)}${cornerDown.repeat(size + 1 - i)}${downPart.repeat(size)}`)
	}
	let cube = ''
	cubeUpLayers.forEach(layer => cube += layer + '\n')
	cubeDownLayers.forEach(layer => cube += layer + '\n')
	return cube.slice(0, -1);
}
console.log(createCube(1))
console.log(createCube(2))
console.log(createCube(3))
console.log(createCube(4))
console.log(createCube(5))