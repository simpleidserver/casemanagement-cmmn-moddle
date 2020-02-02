'use strict';


describe('descriptor', function() {

  var caseDescriptor = require('../../resources/casemanagement');


  it('should provide model', function() {

    // then
    expect(caseDescriptor).to.exist;

    expect(caseDescriptor.uri).to.eql('https://github.com/simpleidserver/CaseManagement');
    expect(caseDescriptor.prefix).to.eql('case');
  });

});