/**
 * @jest-environment jsdom
 */

import YesButton from '../../src/components/yes-button.js';

describe('YesButton', () => {
  describe('handleClick', () => {
    it('should console Yes and its component\'s name', () => {
      const consoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
      const helloButton = new YesButton(
        document.createElement('div'),
        undefined
      );

      helloButton.handleClick();

      expect(consoleLog).toBeCalledWith('Yes', YesButton.name);
    });
  });
});
