const { expect } = require('chai');
const { isSymmetric } = require('./05.CheckForSymetry');
 
describe("Check for symmetry", () => {
  it("Takes an array as argument", () => {
    expect(isSymmetric([2, 2, 2])).to.be.true;
  });

  it("Check if input is symmetric with numeric values", () => {
    expect(isSymmetric([2, 3, 2, 3, 2])).to.be.false;
  });

  it("Check if input is symmetric with letters", () => {
    expect(isSymmetric(["a", "a", "b"])).to.be.false;
  });

  it("Check if input is only one char", () => {
    expect(isSymmetric(["a"])).to.be.false;
  });

  it("Check if input is symmetric with letters and numbers", () => {
    expect(isSymmetric(["a", "a", 1, 2])).to.be.false;
  });
});
