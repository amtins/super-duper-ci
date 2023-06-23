/**
 * @file custom-button.js
 */
import videojs from 'video.js';

/**
 * Hi button class.
 *
 * @extends Button
 */
class HiButton extends videojs.getComponent('Button') {
  /**
   * Handle click shows the app and videojs version.
   *
   * @override
   */
  handleClick() {
    // eslint-disable-next-line
    console.log('hi');
  }

  /**
   * Build css class.
   *
   * @override
   *
   * @returns {String}
   */
  buildCSSClass() {
    return `super-hi-button ${super.buildCSSClass()}`.trim();
  }
}

videojs.registerComponent(HiButton.name, HiButton);

export default HiButton;
