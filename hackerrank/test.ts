function birthdayCakeCandles(candles: number[]): number {
	let tempCandle = 0;
	let count= 0;
	candles.forEach((candle)=>{
		if(candle > tempCandle) {
			tempCandle = candle;
			count=1;
		} else if (candle == tempCandle) {
			count++;
		} 
	})
	return count;
}

console.log(
	birthdayCakeCandles([3,2,0,3])
);
