import videojs from 'video.js';
import getAppVersion from './version.js';

import './components/custom-button.js';

window.videojs = videojs;
window.player = videojs('player', {
  controls: true,
  customButton: true,
  muted: true,
  sources: [
    'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8'
  ],
  width: '640px',
  height: '360px',
});

document.querySelector('.version').textContent = getAppVersion();
