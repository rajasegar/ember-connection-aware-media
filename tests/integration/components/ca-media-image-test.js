import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ca-media-image', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    await render(hbs`
      {{ca-media-image alt="Tomster" imageSrc="sample.png"}}
    `);
  });

  test('should have an img element', async function(assert) {
    assert.ok(find('img'));
  });

  test('should have proper src attribute', function(assert) {
    let img = find('img');
    assert.equal(img.getAttribute('src'), 'sample.png');
  });

  test('should have proper alt attribute', function(assert) {
    let img = find('img');
    assert.equal(img.getAttribute('alt'), 'Tomster');
  });
});
