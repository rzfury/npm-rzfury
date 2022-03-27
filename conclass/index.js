exports.conclass = function (...classes) {
  return classes.filter(c => typeof (c) === 'string').join(' ').trim();
}
