import videojs from 'video.js';
import getAppVersion from './version.js';

document.querySelector('.version').textContent = getAppVersion();

window.player = videojs('player', {
  controls: true,
  muted: true,
  sources:['https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8'],
  width: '640px',
  height: '360px',
});

