function matrixRotation(matrix, r) {
	let y = matrix.length;
	let x = matrix[0].length;
	let layers = Math.min(x, y) / 2;

	for (let layer = 0; layer < layers; layer++) {
		let layerLength = (x - layer * 2) * 2 + (y - layer * 2 - 2) * 2;
		let rotation = r % layerLength;
		for (let rot = 0; rot < rotation; rot++) {
			let temp = matrix[layer][layer];
			// Move elements of top row.
			for (let i = layer; i < x - layer - 1; i++) {
				matrix[layer][i] = matrix[layer][i + 1];
			}
			// Move elements of right column.
			for (let i = layer; i < y - layer - 1; i++) {
				matrix[i][x - layer - 1] = matrix[i + 1][x - layer - 1];
			}
			// Move elements of bottom row.
			for (let i = x - layer - 1; i > layer; i--) {
				matrix[y - layer - 1][i] = matrix[y - layer - 1][i - 1];
			}
			// Move elements of left column.
			for (let i = y - layer - 1; i > layer + 1; i--) {
				matrix[i][layer] = matrix[i - 1][layer];
			}
			matrix[layer + 1][layer] = temp;
		}
	}
	return matrix;
}
let matrix = [
	[1, 2, 3],
	[5, 6, 7],
	[9, 1, 1],
];

printMatrix(matrixRotation(matrix, 2));

function printMatrix(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		console.log(matrix[i].join(' '));
	}
}
