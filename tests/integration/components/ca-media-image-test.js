import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ca-media-image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{ca-media-image}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{ca-media-image alt="Tomster" imageSrc="https://raw.githubusercontent.com/rajasegar/connection-aware-ember/master/public/assets/img/Tomster-Logo-lowRes.png"}}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
