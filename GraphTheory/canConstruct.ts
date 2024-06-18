#!/usr/bin/env ts-node
//? can Construct
//* using memoization
function canConstruct(target: string, wordBank: string[], memo: Record<string, boolean> = {}): boolean {
  if (target in memo) return memo[target];
  if (target === '') return true;
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return memo[target];
      }
    }
  }
  memo[target] = false;
  return memo[target];
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
