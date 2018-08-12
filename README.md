# ember-connection-aware-media

This addon gives you a component "ca-media" which is a network connection-aware component by 
making use of the latest Network Information API provided by the browser.
At present, Chrome is the only browser that supports this api.


## Usage

To render the component in your templates,

```hbs
{{ca-media
  highResImage=highResImage
  lowResImage=lowResImage
  oggVideo=oggVideo
  webmVideo=webmVideo
  alt="Tomster The Ember Mascot"
  autoUpdate=true
}}
```

To provide different media sources to the component either using a parent component, route or a controller.

```js
import Controller from '@ember/controller';

export default Controller.extend({
  lowResImage: 'https://raw.githubusercontent.com/rajasegar/connection-aware-ember/master/public/assets/img/Tomster-Logo-lowRes.png',
  highResImage: 'https://raw.githubusercontent.com/rajasegar/connection-aware-ember/master/public/assets/img/Tomster-Logo.png',

  oggVideo: 'http://download.blender.org/peach/trailer/trailer_400p.ogg',
  webmVideo: 'http://dl3.webmfiles.org/big-buck-bunny_trailer.webm',

});
```
## Installation

* `ember install ember-connection-aware-media`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
