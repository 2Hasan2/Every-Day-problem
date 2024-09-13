function matrixRotation(matrix, r) {
	const y = matrix.length;
	const x = matrix[0].length;
	const layers = Math.min(x, y) / 2;

	for (let layer = 0; layer < layers; layer++) {
		const layerLength = (x - layer * 2) * 2 + (y - layer * 2 - 2) * 2;
		const rotation = r % layerLength;

		const rotatedLayer = [];

		for (let i = layer; i < x - layer; i++) {
			rotatedLayer.push(matrix[layer][i]);
		}
		for (let i = layer + 1; i < y - layer; i++) {
			rotatedLayer.push(matrix[i][x - layer - 1]);
		}
		for (let i = x - layer - 2; i >= layer; i--) {
			rotatedLayer.push(matrix[y - layer - 1][i]);
		}
		for (let i = y - layer - 2; i > layer; i--) {
			rotatedLayer.push(matrix[i][layer]);
		}

		const rotated = [...rotatedLayer.slice(rotation), ...rotatedLayer.slice(0, rotation)];

		let index = 0;
		for (let i = layer; i < x - layer; i++) {
			matrix[layer][i] = rotated[index++];
		}
		for (let i = layer + 1; i < y - layer; i++) {
			matrix[i][x - layer - 1] = rotated[index++];
		}
		for (let i = x - layer - 2; i >= layer; i--) {
			matrix[y - layer - 1][i] = rotated[index++];
		}
		for (let i = y - layer - 2; i > layer; i--) {
			matrix[i][layer] = rotated[index++];
		}
	}

	// output
	for (let i = 0; i < matrix.length; i++) {
		console.log(matrix[i].join(' '));
	}
}

let matrix = [
	[1, 2, 3, 8],
	[5, 6, 7, 6],
	[9, 1, 1, 5],
	[9, 1, 1, 5],
];

matrixRotation(matrix, 3);
