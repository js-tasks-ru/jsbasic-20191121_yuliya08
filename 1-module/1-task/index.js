/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  if (n < 1 || (n !== 1 && n % 1 !== 0)) {
    return 'error';
  }
  return Math.pow(m, n);
}
