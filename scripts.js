let budget = 0;
let expenses = [];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Please enter username and password.');
    }
}

function logout() {
    document.getElementById('login-screen').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function setBudget() {
    budget = parseFloat(document.getElementById('budget-input').value);
    document.getElementById('budget-amount').innerText = `$${budget.toFixed(2)}`;
    checkBudget();
}

function addExpense() {
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (description && amount) {
        expenses.push({ description, amount });
        updateExpenseList();
        checkBudget();
    } else {
        alert('Please enter a description and amount.');
    }
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.innerText = `${expense.description}: $${expense.amount.toFixed(2)}`;
        expenseList.appendChild(listItem);
    });
}

function checkBudget() {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    if (totalExpenses > budget) {
        alert('Warning: You have exceeded your budget!');
    }
}
