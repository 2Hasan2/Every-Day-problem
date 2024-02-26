function matrixRotation(matrix, r) {
	const y = matrix.length;
	const x = matrix[0].length;
	const layers = Math.min(x, y) / 2;

	for (let layer = 0; layer < layers; layer++) {
		const layerLength = (x - layer * 2) * 2 + (y - layer * 2 - 2) * 2;
		const rotation = r % layerLength;

		for (let rot = 0; rot < rotation; rot++) {
			// Store the top-left element of the current layer
			const temp = matrix[layer][layer];

			// Rotate top row
			for (let i = layer; i < x - layer - 1; i++) {
				matrix[layer][i] = matrix[layer][i + 1];
			}

			// Rotate right column
			for (let i = layer; i < y - layer - 1; i++) {
				matrix[i][x - layer - 1] = matrix[i + 1][x - layer - 1];
			}

			// Rotate bottom row
			for (let i = x - layer - 1; i > layer; i--) {
				matrix[y - layer - 1][i] = matrix[y - layer - 1][i - 1];
			}

			// Rotate left column
			for (let i = y - layer - 1; i > layer + 1; i--) {
				matrix[i][layer] = matrix[i - 1][layer];
			}

			// Assign the stored top-left element to its new position
			matrix[layer + 1][layer] = temp;
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		console.log(matrix[i].join(' '));
	}
}

let matrix = [
	[1, 2, 3],
	[5, 6, 7],
	[9, 1, 1],
];


matrixRotation(matrix, 3)
