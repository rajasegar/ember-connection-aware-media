import Controller from '@ember/controller';

export default Controller.extend({
  lowResImage: 'https://raw.githubusercontent.com/rajasegar/connection-aware-ember/master/public/assets/img/Tomster-Logo-lowRes.png',
  highResImage: 'https://raw.githubusercontent.com/rajasegar/connection-aware-ember/master/public/assets/img/Tomster-Logo.png',

  oggVideo: 'http://download.blender.org/peach/trailer/trailer_400p.ogg',
  webmVideo: 'http://dl3.webmfiles.org/big-buck-bunny_trailer.webm',


  init() {
    this._super(...arguments);
    // check connection type before first render.
    if (this.hasNetworkInfoSupport()) {
      const connectionType = navigator.onLine ? navigator.connection.effectiveType : 'offline';
      console.log(connectionType); // eslint-disable-line
      this.set('connectionType', connectionType);

      navigator.connection.addEventListener('change', this.setConnectionType.bind(this));
    }
  },

  hasNetworkInfoSupport() {
    let connection = navigator.connection ;
    return connection && connection.effectiveType;
  },

  willDestroy() {
    if (this.hasNetworkInfoSupport()) {
      navigator.connection.removeEventListener('change', this.setConnectionType.bind(this));
    }
  },

  setConnectionType() {
    if (this.hasNetworkInfoSupport) {
      const connectionType = this.getConnectionType();
      this.set('connectionType', connectionType);
    }
  },

  getConnectionType() {
    const connection = navigator.connection;
    // check if we're offline first...
    if (!navigator.onLine) {
      return 'offline';
    }
    // ...or if reduced data is preferred.
    if (connection.saveData) {
      return 'saveData';
    }
    return connection.effectiveType;
  }
});
