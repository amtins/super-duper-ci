/**
 * @file custom-button.js
 */
import videojs from 'video.js';

/**
 * Hello class buttons.
 *
 * @extends Button
 */
class HelloButton extends videojs.getComponent('Button') {
  /**
   * Handle click shows hello.
   *
   * @override
   */
  handleClick() {
    // eslint-disable-next-line
    console.log('Hello');
  }

  /**
   * Build css class.
   *
   * @override
   *
   * @returns {String}
   */
  buildCSSClass() {
    return `super-hello-button ${super.buildCSSClass()}`.trim();
  }
}

videojs.registerComponent(HelloButton.name, HelloButton);

export default HelloButton;
