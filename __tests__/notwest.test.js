const {
    currentAccount,
    deposit,
    withdraw,
    checkBalance,
    viewStatement,
    transactions,
    deposits,
    withdrawals,
    startingBalance,
    viewDeposits,
    viewWithdrawals
  } = require('../src/notwest');

  beforeEach(() => {
    currentAccount[0].balance = 100
  })

describe('deposit', () => {
    it('adds amount passed into the function to the balance property within the currentAccount object', () => {
      deposit(100)
      expect(currentAccount[0].balance).toEqual(200)
    });
});

describe('withdraw', () => {
  it('removes amount passed into the function from the balance property within the currentAccount object', () => {
    withdraw(100)
    expect(currentAccount[0].balance).toEqual(0)
  })
})

describe('checkBalance', () => {
  it ('returns the value of the balance property within the currentAccount object', () => {
    const result = checkBalance()
    expect(result).toEqual('Your balance is: £' + currentAccount[0].balance)
  })
})

describe ('viewStatement', () => {
  it ('returns a list of transactions carried out up to this point', () => {
  const result = viewStatement()
  expect(result).toEqual('Hi there, ' + currentAccount[0].name + '! Your balance was: £' + startingBalance + '. You made the following transactions: ' + (transactions.join(", ")) + '. Of which the following were deposits: ' + (deposits.join(", ")) + '. And the following were withdrawals: ' + (withdrawals.join(", ")) + ". Your balance is: £" + currentAccount[0].balance)
  })
})

describe ('viewDeposits', () => {
  it ('returns a list of deposits, and deposits only, carried out up to this point', () => {
    const result = viewDeposits()
    expect(result).toEqual('You made the following deposits: ' + (deposits.join(', ')))
  })
})

describe ('viewWithdrawals', () => {
  it ('returns a list of withdrawals, and withdrawals only, carried out up to this point', () => {
    const result = viewWithdrawals()
    expect(result).toEqual('You made the following withdrawals: ' + (withdrawals.join(', ')))
  })
})