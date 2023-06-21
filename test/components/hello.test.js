/**
 * @jest-environment jsdom
 */

import HelloButton from '../../src/components/hello-button.js';

describe('HelloButton', () => {
  describe('handleClick', () => {
    it('should console Hello', () => {
      const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
      const divEl = document.createElement('div');
      divEl['options_'] = {experimentalSvgIcons: undefined};

      const helloButton = new HelloButton(
        divEl,
        undefined
      );

      helloButton.handleClick();

      expect(consoleLog).toBeCalledWith('Hello');
    });
  });
});
