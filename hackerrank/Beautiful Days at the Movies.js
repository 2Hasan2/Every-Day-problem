function beautifulDays(i, j, k) {
	let count = 0;
	for (let day = i; day <= j; day++) {
		 if (!(Math.abs(day - day.reverse()) % k)) {
			count++
		 }
	}
	return count
}

Number.prototype.reverse = function() {
	return parseFloat(this.toString().split('').reverse().join(''));
}
