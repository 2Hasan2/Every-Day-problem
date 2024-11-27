function isValidWalk(walk: string[]): boolean {
  if (walk.length !== 10) {
    return false;
  }
  let x = 0;
  let y = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      y++;
    } else if (walk[i] === "s") {
      y--;
    } else if (walk[i] === "e") {
      x++;
    } else if (walk[i] === "w") {
      x--;
    }
  }
  const count = Math.abs(x) + Math.abs(y);
  return count == 0;
}

console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
