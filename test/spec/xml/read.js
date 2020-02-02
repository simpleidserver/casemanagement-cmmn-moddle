'use strict';


var readFile = require('../../helper').readFile,
    createModdle = require('../../helper').createModdle;


describe('read', function() {
  describe('should read extensions', function() {

    var moddle;

    beforeEach(function() {
      moddle = createModdle();
    });
	
    var moddle;
	
    describe('case:FormSupported with case:formKey', function() {

      it('on HumanTask', function(done) {

        // given
        var xml = readFile('test/fixtures/xml/humanTask-case-formSupported.part.cmmn');

        // when
        moddle.fromXML(xml, 'cmmn:HumanTask', function(err, task) {
          // then
          expect(task).to.jsonEqual({
            $type: 'cmmn:HumanTask',
            formKey: 'form.html'
          });

          done(err);
        });
      });
    });
  });
});