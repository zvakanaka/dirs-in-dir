const {expect, it, describe} = require('./expect');
const dirsInDir = require('../index');

describe('the dirsInDir function', () => {
  it('should get directories', () => {
    const directories = dirsInDir('.');
    expect(JSON.stringify(directories)).to.equal('["test"]');
  });
  it('should return an empty array when there are no directories', () => {
    expect(JSON.stringify(dirsInDir('./test'))).to.equal('[]');
  });

  it('should fail properly', () => {
    try {
      const badDirs = dirsInDir('nonsense');
    } catch (e) {
      expect(e.message).to.equal('Directory "nonsense" does not exist');
    }
  });
});
