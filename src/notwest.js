const currentAccount = [{
    name: 'Jonny Edge',
    balance: 100,
}]

let transactions = []
let deposits = []
let withdrawals = []
const startingBalance = currentAccount[0].balance

const deposit = (amount) => {
    currentAccount[0].balance += amount
    deposits.push(amount)
    transactions.push('+' + amount)
    return currentAccount[0].balance
}

const withdraw = (amount) => {
    currentAccount[0].balance -= amount
    withdrawals.push(amount)
    transactions.push('-' + amount)
    return currentAccount[0].balance
}

const checkBalance = () => {
    return 'Your balance is: £' + currentAccount[0].balance
}

const viewStatement = () => {
    return 'Hi there, ' + currentAccount[0].name + '! Your balance was: £' + startingBalance + '. You made the following transactions: ' + (transactions.join(", ")) + '. Of which the following were deposits: ' + (deposits.join(", ") + '. And the following were withdrawals: ' + (withdrawals.join(", ")) + ". Your balance is: £" + currentAccount[0].balance)
    
    // console.log('Hi there, ' + currentAccount[0].name + '!')
    // console.log('Your balance was: £' + startingBalance)
    // console.log('You made the following transactions: ' + (transactions.join(", ")))
    // console.log('Of which the following were deposits: ' + (deposits.join(", ")))
    // console.log('And the following were withdrawals: ' + (withdrawals.join(", ")))
    // console.log('Your balance is: £' + currentAccount[0].balance)
}

const viewDeposits = () => {
    return 'You made the following deposits: ' + (deposits.join(', '))
}

const viewWithdrawals = () => {
    return 'You made the following withdrawals: ' + (withdrawals.join(', '))
}

// deposit(100)
// withdraw(100)
// deposit(150)
// deposit(25)
// withdraw(15)
// viewStatement()

module.exports = {
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
}