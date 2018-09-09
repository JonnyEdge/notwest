const {
    currentAccount,
    deposit,
    withdraw,
    checkBalance,
    viewStatement,
  } = require('../src/notwest');

describe('deposit', () => {
    it('adds the amount passed into the function to the balance property within the currentAccount object', () => {
      expect(deposit(100)).toEqual({
        balance: 100,
      });
    });
});