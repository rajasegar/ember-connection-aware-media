import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('ca-media', 'Integration | Component | ca media', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function(){
    await render(hbs`{{ca-media}}`);
  })

  test('it renders', async function(assert) {


    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    assert.equal(this.element.textContent.trim(), '');

  });

});

