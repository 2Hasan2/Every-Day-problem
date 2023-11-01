
function solve(n, d) {
  if (d === 1) {
    const temp = pow(2, n) - 2;
    return mul(add(temp, 998244353), 2);
  }
  let ans = 0;
  const pd2 = pow(2, d - 2);
  const pd = mul(pd2, 2 * 2);
  for (let i = 1; i < n; i++) {
    const a = mul(2, ans);
    const b = d <= i ? pd : 0;

    const c1 = Math.max(d - i, 1);
    const c2 = Math.min(d - 1, i);
    const c = c2 < c1 ? 0 : mul(c2 - c1 + 1, pd2);
    ans = add(a, add(b, c));
  }
  return mul(ans, 2);
}

// Define the `add` function
function add(a, b) {
  return (a + b) % 998244353;
}

// Define the `mul` function
function mul(a, b) {
  let r = 0;
  let base = a;
  while (b) {
    if (b & 1) {
      r = add(r, base);
    }
    b >>= 1;
    base = add(base, base);
  }
  return r;
}

// Define the `pow` function
function pow(a, b) {
  let r = 1;
  let base = a;
  while (b) {
    if (b & 1) {
      r = mul(r, base);
    }
    b >>= 1;
    base = mul(base, base);
  }
  return r;
}


console.log(solve(14142, 17320));