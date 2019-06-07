import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ca-media-video', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    await render(hbs`{{ca-media-video alt="Tomster" ogg="sample.ogg" webm="sample.webm"}}`);
  });

  test('should have a video element', function(assert) {
    assert.ok(find('video'));
  });

  test('should have a video element with preload=true', function(assert) {
    assert.equal(find('video').getAttribute('preload'), 'true');
  });

  test('should have a video element with controls=true', function(assert) {
    assert.equal(find('video').getAttribute('controls'), 'true');
  });

  test('should have a video element with proper alt text', function(assert) {
    assert.equal(find('video').getAttribute('alt'), 'Tomster');
  });

  test('should have a source element of type ogg', function(assert) {
    assert.ok(find('source[type="video/ogg"]'));
  });

  test('should have a source element of type webm', function(assert) {
    assert.ok(find('source[type="video/webm"]'));
  });
});
