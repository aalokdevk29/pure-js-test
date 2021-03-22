exports.areaOfCircle = (radius) => Math.PI*radius*radius;

exports.isStartWithCapital = (string = '') => /[A-Z]/.test(string.charAt(0));
