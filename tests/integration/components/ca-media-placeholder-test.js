import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ca-media-placeholder', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    await render(hbs`{{ca-media-placeholder alt="Tomster"}}`);
  });

  test('should have placeholder element', async function(assert) {
    assert.ok(find('.placeholder'));
  });

  test('should have proper alt text ', async function(assert) {
    let captionEl = find('.placeholder__caption');
    assert.equal(captionEl.textContent.trim(), 'Tomster');
  });


});
