import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('ca-media', 'Integration | Component | ca media', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {


    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{ca-media}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    this.render(hbs`
    {{#ca-media}}
      template block text
    {{/ca-media}}
  `);

    assert.equal(this.element.textContent.trim(), '');

  });

});

