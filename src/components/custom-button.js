/**
 * @file custom-button.js
 */
import videojs from 'video.js';
import { version } from '../../package.json';

/**
 * Base class for all custom buttons.
 *
 * @extends Button
 */
class CustomButton extends videojs.getComponent('Button') {
  /**
   * Handle click shows the app and videojs version.
   *
   * @override
   */
  handleClick() {
    // eslint-disable-next-line
    console.log({
      appVersion: version,
      videojs: videojs.VERSION,
      vhs: videojs.VhsHandler.version(),
    });
  }

  /**
   * Build css class.
   *
   * @override
   *
   * @returns {String}
   */
  buildCSSClass() {
    return `super-custom-button ${super.buildCSSClass()}`.trim();
  }
}

videojs.registerComponent(CustomButton.name, CustomButton);

export default CustomButton;
