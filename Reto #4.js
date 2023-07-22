function fitsInOneBox(boxes) {
	function verifyIfAllFits(boxes) {
		let reserveBox = { l: 0, w: 0, h: 0 };
		const boxesThatFit = boxes.filter((box) => {
			const validation =
				box.l > reserveBox.l &&
				box.w > reserveBox.w &&
				box.h > reserveBox.h;
			reserveBox = box;
			return validation;
		});
		return boxesThatFit.length === boxes.length;
	}
	function permute(array) {
		if (array.length === 0) {
			return [[]];
		} else {
			const permutations = [];
			for (let i = 0; i < array.length; i++) {
				const element = array[i];
				const remainingElements = array
					.slice(0, i)
					.concat(array.slice(i + 1));
				const subPermutations = permute(remainingElements);
				for (let j = 0; j < subPermutations.length; j++) {
					permutations.push([element].concat(subPermutations[j]));
				}
			}
			return permutations;
		}
	}
	const boxesPermutated = permute(boxes);
	const allBoxesFit = boxesPermutated.some(boxOrder => {
		return verifyIfAllFits(boxOrder)
	})
	return allBoxesFit;
}