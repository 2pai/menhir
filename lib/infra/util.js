const isObject = (value) => {
  return value instanceof Object;
};

const intervalToSecond = (interval) => {
  const matchRegex = /(\d+)([mhd])/;
  const strMatch = interval.match(matchRegex);
  if (strMatch.length > 0) {
    switch (strMatch[2]) {
    // Minute
    case 'm':
      return parseInt(strMatch[1]) * 60;
      // Hour
    case 'h':
      return parseInt(strMatch[1]) * 60 * 60;
      // Day
    case 'd':
      return parseInt(strMatch[1]) * 24 * 60 *60;
    default:
      return null;
    }
  } else {
    return null;
  }
};

module.exports = {
  isObject,
  intervalToSecond
};
