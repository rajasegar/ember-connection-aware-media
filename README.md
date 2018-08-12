# ember-connection-aware-media

[![Build Status](https://travis-ci.org/rajasegar/ember-connection-aware-media.svg?branch=master)](https://travis-ci.org/rajasegar/ember-connection-aware-media) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-connection-aware-media/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-connection-aware-media?branch=master)
[![npm version](http://img.shields.io/npm/v/ember-connection-aware-media.svg?style=flat)](https://npmjs.org/package/ember-connection-aware-media "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-connection-aware-media/status.svg)](https://david-dm.org/rajasegar/ember-connection-aware-media)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-connection-aware-media/dev-status.svg)](https://david-dm.org/rajasegar/ember-connection-aware-media?type=dev)
[![EmberObserver](http://emberobserver.com/badges/ember-connection-aware-media.svg?branch=master)](http://emberobserver.com/addons/ember-connection-aware-media)


This addon gives you a component "ca-media" which is a network connection-aware component by 
making use of the latest Network Information API provided by the browser.
At present, Chrome is the only browser that supports this api.

Based on the effective connection type, this component serves different media resources like below:

- 2g => low resolution images
- 3g => high resolution images
- 4g => video
- offline => Placeholder content

There is also a blog post [here](http://hangaroundtheweb.com/2018/08/creating-connection-aware-ember-media-components/) defining how the component is created from scratch and how
it works.

## Demo
Please find the demo for this addon [here](https://rajasegar.github.io/connection-aware-ember/) which works only in Chrome.

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

## Credits
* [Max Böck](https://mxb.at/blog/connection-aware-components/)
