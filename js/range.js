/**
 * Generates a sequence of numbers from `start` to `end` with an optional `step`.
 *
 * @name range
 * @param {number} start - The starting value of the sequence.
 * @param {number} end - The end value of the sequence (exclusive).
 * @param {number} step - The increment value for each step in the sequence. Defaults to 1 if not provided.
 * @returns {IterableIterator<number>} An iterator that generates the sequence of numbers.
 *
 * @example
 * // Generate numbers from 0 to 4
 * const numbers = range(0, 5);
 * for (const num of numbers) {
 *   console.log(num); // 0, 1, 2, 3, 4
 * }
 *
 * @example
 * // Generate numbers from 1 to 10 with a step of 2
 * const numbers = range(1, 10, 2);
 * for (const num of numbers) {
 *   console.log(num); // 1, 3, 5, 7, 9
 * }
 */
function range (start, end, step = 1) {
  const iterator = {
    [Symbol.iterator] () {
      return this;
    },
    next () {
      // if move forward and step is positive or move backward and step is negative
      if ((start < end && step > 0) || (start > end && step < 0)) {
        const result = { done: false, value: start };
        start += this.step;
        return result;
      }
      return { done: true, value: end };
    }
  };

  // create a new object with the iterator as its prototype
  const obj = Object.create(iterator);

  // setter and getter for <step>
  Object.defineProperty(obj, 'step', {
    get () {
      return step;
    },
    set (newStep) {
      step = newStep;
    }
  });

  // setter and getter for <end>
  Object.defineProperty(obj, 'end', {
    get () {
      return end;
    },
    set (newEnd) {
      end = newEnd;
    }
  });

  // setter and getter for <start>
  Object.defineProperty(obj, 'start', {
    get () {
      return start;
    },
    set (newStart) {
      start = newStart;
    }
  });

  return obj;
}
