module.exports = function parse(str) {
  var parts = str.split('=');
  if(parts.length != 2) {
    throw new Error('Invalid Range format');
  }
  var unit = parts[0];
  var rangeSet = parts[1].split(',').map(function(range) {
    var parts = range.split('-');
    if(parts.length != 2) {
      throw new Error('Invalid Range format');
    }
    var first = parts[0];
    var last = parts[1];
    if(first == '') {
      return {
        suffix: parseInt(last, 10)
      };
    }
    if(last == '') {
      return {
        first: parseInt(first, 10)
      };
    }
    return {
      first: parseInt(first, 10),
      last: parseInt(last, 10)
    };
  });
  if(rangeSet.length == 1) {
    rangeSet[0].unit = unit;
    return rangeSet[0];
  }
  return {
    unit: unit,
    ranges: rangeSet
  };
};
