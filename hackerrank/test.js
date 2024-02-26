function plusMinus(arr) {
	let ZeroCount = 0;
	let PositiveCount = 0;
	let NegativeCount = 0;
	let len = arr.length
	for (let i = 0; i < len; i++) {
		if(arr[i]<0)NegativeCount++
		else if (arr[i]>0)PositiveCount++
		else ZeroCount++
	}
	console.log(PositiveCount/len);
	console.log(NegativeCount/len);
	console.log(ZeroCount/len);
}

console.log(plusMinus([10, 8,0,0,-10,4, -12]))
	