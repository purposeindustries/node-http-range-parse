var parse = require('../');

describe('#parse', function() {
  it('should return range unit', function() {
    parse('items=1-2').should.have.property('unit', 'items');
  });
  it('should return range', function() {
    var range = parse('items=1-2');
    range.should.have.property('first', 1);
    range.should.have.property('last', 2);
  });
  it('should handle open end', function() {
    var range = parse('items=1-');
    range.should.not.have.property('last');
    range.should.have.property('first', 1);
  });
  it('should handle suffix-range-spec', function() {
    var range = parse('items=-1');
    range.should.not.have.property('first');
    range.should.not.have.property('last');
    range.should.have.property('suffix', 1);
  });
  it('should handle range sets', function() {
    parse('items=1-2,3-4').should.have.property('ranges', [{
      first: 1,
      last: 2
    }, {
      first: 3,
      last: 4
    }]);
  });
  it('should handle errors', function() {
    (function() {
      parse('foobar');
    }).should.throw();
    (function() {
      parse('foo=bar');
    }).should.throw();
  })
})
