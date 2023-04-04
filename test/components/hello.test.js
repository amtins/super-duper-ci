/**
 * @jest-environment jsdom
 */

import HelloButton from '../../src/components/hello-button.js';

describe('HelloButton', () => {
  describe('handleClick', () => {
    it('should console Hello', () => {
      const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
      const helloButton = new HelloButton(
        document.createElement('div'),
        undefined
      );

      helloButton.handleClick();

      expect(consoleLog).toBeCalledWith('Hello');
    });
  });
});
