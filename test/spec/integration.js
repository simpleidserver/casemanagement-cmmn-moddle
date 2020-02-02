'use strict';

var CmmnModdle = require('cmmn-moddle').default;

var caseDescriptor = require('../../resources/casemanagement');


describe('exports', function() {
  it('should extend cmmn-moddle', function() {
    // given
    var moddle = new CmmnModdle({
      case: caseDescriptor
    });

    // when
    var humanTask = moddle.create('cmmn:HumanTask');

    // then
    expect(humanTask.$instanceOf('case:Assignable')).to.be.true;
  });

});