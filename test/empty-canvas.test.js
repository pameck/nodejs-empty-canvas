const expect = require('chai').expect;
const emptyCanvas = require('../src/empty-canvas');

describe('Empty Canvas', () => {
  it('should say Hello', () => {
    expect(emptyCanvas.saysHello()).to.equal('Hello');
  });
});