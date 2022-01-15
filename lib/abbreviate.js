/**
 * Convert long number into abbreviated string.
 * @params string str String to be abbreviated
 */

const abbreviateNumber = (number) => {
  var units = ['K', 'M', 'B', 'T'];
  var decPlaces = Math.pow(10, 2);

  for (var i = units.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;

      if (number === 1000 && i < units.length - 1) {
        number = 1;
        i++;
      }

      number += units[i];

      break;
    }
  }

  return number;
};

export default abbreviateNumber;
