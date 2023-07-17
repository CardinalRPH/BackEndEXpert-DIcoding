class FigureCalculator {
  constructor(mathBasic) {
    // eslint-disable-next-line no-underscore-dangle
    this._mathBasic = mathBasic;
  }

  // eslint-disable-next-line class-methods-use-this
  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }
    const [length, width] = args;

    if (typeof length !== 'number' || typeof width !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }
    // formula: (2 * (length + width))
    // eslint-disable-next-line no-underscore-dangle
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  // eslint-disable-next-line class-methods-use-this
  calculateRectangleArea() {}

  // eslint-disable-next-line class-methods-use-this
  calculateTrianglePerimeter() {}

  // eslint-disable-next-line class-methods-use-this
  calculateTriangleArea() {}
}

module.exports = FigureCalculator;
