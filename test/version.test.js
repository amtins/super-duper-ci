import { version } from '../package.json';
import getAppVersion from '../src/version.js';

describe('version', () => {
  describe('getAppVersion', () => {
    it('should return the same version number', () => {
      expect(getAppVersion()).toBe(version);
    });
  });
});
