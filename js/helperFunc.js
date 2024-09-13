/**
 * WatchedObject - a proxy object that watches for changes to its properties
 * @param {*} initialValue
 * @param {function} callback
 * function callback(property, value, oldValue)
 * @returns {Proxy} watchedObject
 */
function WatchedObject(initialValue, callback = console.log) {
	  let watchedObject = new Proxy({ value: initialValue }, {
		set: function(target, property, value) {
		  if (target[property] !== value) {
			const oldValue = target[property];
			target[property] = value;
			callback(property, value, oldValue);
	  }
	  return true;
	},
	get: function(target, property) {
		  if (property === 'getValue') {
			return () => target.value;
	  }
	  return target[property];
	}
  });
  return watchedObject;
}

/**
 * executeParallel - a function that executes an array of functions simultaneously
 * @param {Array<function>} functions - an array of functions to be executed
 * @returns {Promise} a Promise that resolves when all functions are executed
 */
function executeParallel(functions) {
	const promises = functions.map(func => func());
  
	return Promise.all(promises);
}

/**
 * executeSequential - a function that executes an array of functions sequentially
 * @param {Array<function>} functions - an array of functions to be executed
 * @returns {Promise} a Promise that resolves when all functions are executed
 */
function executeSequential(functions) {
	return functions.reduce((promise, func) => promise.then(() => func()), Promise.resolve());
}
