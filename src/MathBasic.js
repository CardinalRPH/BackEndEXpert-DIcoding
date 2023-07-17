const MathBasic = {
  // eslint-disable-next-line no-underscore-dangle
  _validateArgs(args) {
    if (args.length !== 2) {
      throw new Error('fungsi hanya menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }
    return args;
  },
  add(...args) {
    // eslint-disable-next-line no-underscore-dangle
    const [a, b] = this._validateArgs(args);
    return a + b;
  },
  subtract(...args) {
    // eslint-disable-next-line no-underscore-dangle
    const [a, b] = this._validateArgs(args);
    return a - b;
  },
  multiply(...args) {
    // eslint-disable-next-line no-underscore-dangle
    const [a, b] = this._validateArgs(args);
    return a * b;
  },
  divide(...args) {
    // eslint-disable-next-line no-underscore-dangle
    const [a, b] = this._validateArgs(args);
    return a / b;
  },
};

module.exports = MathBasic;
