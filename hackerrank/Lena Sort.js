function constructArray(N, M) {
	if (M < N - 1 || M > (N * (N - 1)) / 2) {
		return [-1];
	}

	let array = [];
	for (let i = 1; i <= N; i++) {
		array.push(i);
	}

	let diff = M - (N - 1);
	for (let i = N - 2; i >= 0; i--) {
		if (diff === 0) {
			break;
		}
		if (diff >= N - 1 - i) {
			diff -= N - 1 - i;
			[array[i], array[i + 1]] = [array[i + 1], array[i]];
		}
	}

	return array;
}

const queries = [
	[3],
	[1, 0],
	[4, 6],
	[3, 2]
];

for (let i = 0; i < queries.length; i++) {
	const [N, M] = queries[i];
	const result = constructArray(N, M);
	console.log(result.join(' '));
}
