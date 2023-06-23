/**
 * @file custom-button.js
 */
import videojs from 'video.js';

/**
 * Yes button class.
 *
 * @extends Button
 */
class YesButton extends videojs.getComponent('Button') {
  #message = YesButton.name;

  /**
   * Handle click shows.
   *
   * @override
   */
  handleClick() {
    // eslint-disable-next-line
    console.log('Yes', this.#message);
  }

  /**
   * Build css class.
   *
   * @override
   *
   * @returns {String}
   */
  buildCSSClass() {
    return `super-yes-button ${super.buildCSSClass()}`.trim();
  }
}

videojs.registerComponent(YesButton.name, YesButton);

export default YesButton;
