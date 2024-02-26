// make square of a number with 10 ways

// beginner way
let num = 34
console.log(num*num)

// using function
let square = num => num*num
console.log(square(34))

// using Math.pow
console.log(Math.pow(34,2))

// using ** operator
console.log(34**2)

// using eval
console.log(eval('34*34'))


// use prototype
Number.prototype.square = function(){
	return this*this
}
console.log((34).square())

// use oop 
class Square{
	constructor(num){
		this.num = num
	}
	square(){
		return this.num*this.num
	}
}

let sq = new Square(34)
console.log(sq.square())

