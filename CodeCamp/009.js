class Triplet {
  constructor (a, b) {
    this.a = a;
    this.b = b;
    this.c = Math.sqrt(a * a + b * b);
  }

  sum () {
    return this.a + this.b + this.c;
  }

  product () {
    return this.a * this.b * this.c;
  }

  isPythagorean () {
    return this.a ** 2 + this.b ** 2 === this.c ** 2;
  }
}

const triplet = new Triplet(3, 4);

function specialPythagoreanTriplet (n) {
  let a = 1; let b = 2;
  while (a < n) {
    while (b < n) {
      const triplet = new Triplet(a, b);
      if (triplet.sum() === n && triplet.isPythagorean()) {
        return triplet.product();
      }
      b++;
    }
    a++;
    b = a + 1;
  }
}
console.log(specialPythagoreanTriplet(24));
