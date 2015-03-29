import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:admin', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});

test('it returns the correct characters for the suffix', function(assert) {
  var controller = this.subject();
  assert.equal(controller.inningSuffixChars(1), "st");
  assert.equal(controller.inningSuffixChars(2), "nd");
  assert.equal(controller.inningSuffixChars(3), "rd");
  assert.equal(controller.inningSuffixChars(4), "th");
  assert.equal(controller.inningSuffixChars(15), "th");
});
