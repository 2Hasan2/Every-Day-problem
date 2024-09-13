/**
 password is considered strong if the below conditions are all met:
It has at least 6 characters and at most 20 characters.
It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
It does not contain three repeating characters in a row (i.e., "Baaabb0" is weak, but "Baaba0" is strong).

Given a string password,
 return the minimum number of steps required to make password strong.
  if password is already strong, return 0.
 */

/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function (password) {
    if (password.length >= 6) {
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const digitRegex = /[0-9]/;
        const repeatedRegex = /(.)\1\1/;
        let missing = 0;
        lowercaseRegex.test(password) ? console.log('lower') : missing++;
        uppercaseRegex.test(password) ? console.log('upper') : missing++;
        digitRegex.test(password) ?  : missing++;
        repeatedRegex.test(password) ? missing++ : false;
        return missing;
    } else {
        return 6 - password.length;

    }
};

console.log(strongPasswordChecker("aaa123"));
