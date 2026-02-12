function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function camelCase(str) {
  return str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
}
function truncate(str, length, suffix = '...') {
  if (str.length <= length) return str;
  return str.slice(0, length) + suffix;
}
function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}
function reverse(str) {
  return str.split('').reverse().join('');
}
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}

module.exports = { capitalize, camelCase, truncate, countWords, reverse, isPalindrome };
