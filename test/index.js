var should = require('chai').should(),
    scapegoat = require('../index'),
    zahlenwort = scapegoat.escape,
    unescape = scapegoat.unescape;

describe('#zahlenwort', function() {
  it('1', function() {
    zahlenwort('1').should.equal('eins');
  });

  it('100', function() {
    zahlenwort('100').should.equal('einhundert');
  });

});

describe('#zahlenwort-currency', function() {
  it('1', function() {
    zahlenwort('1', true).should.equal('ein Euro');
  });

  it('100', function() {
    zahlenwort('100', true).should.equal('einhundert Euro');
  });

});