// Function to add income
function addIncome() {
    const incomeType = document.getElementById('income').value;
    const incomeAmount = parseFloat(document.getElementById('amount').value);

    if (!incomeType || isNaN(incomeAmount) || incomeAmount <= 0) {
        alert('Please enter valid income details.');
        return;
    }

    let incomes = JSON.parse(localStorage.getItem('incomes')) || [];
    incomes.push({ type: incomeType, amount: incomeAmount, dateTime: new Date().toLocaleString() });
    localStorage.setItem('incomes', JSON.stringify(incomes));

    updateUI();
}

// Function to add expense
function addExpense() {
    const expenseType = document.getElementById('expense').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    if (!expenseType || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter valid expense details.');
        return;
    }

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push({ type: expenseType, amount: expenseAmount, dateTime: new Date().toLocaleString() });
    localStorage.setItem('expenses', JSON.stringify(expenses));

    updateUI();
}

// Function to update the user interface
function updateUI() {
    const incomeList = document.getElementById('incomeList');
    const expenseList = document.getElementById('expenseList');
    incomeList.innerHTML = '';
    expenseList.innerHTML = '';

    const incomes = JSON.parse(localStorage.getItem('incomes')) || [];
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    incomes.forEach(income => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${income.type}</td><td>$${income.amount}</td><td>${income.dateTime}</td>`;
        incomeList.appendChild(tr);
    });

    expenses.forEach(expense => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${expense.type}</td><td>$${expense.amount}</td><td>${expense.dateTime}</td>`;
        expenseList.appendChild(tr);
    });

    calculateTotalBalance(incomes, expenses);
}

// Function to calculate and display total balance
function calculateTotalBalance(incomes, expenses) {
    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
    const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const balance = totalIncome - totalExpense;

    document.getElementById('totalIncome').textContent = `Balance: $${balance}`;
}

// Function to reset incomes and expenses
function resetBudget() {
    localStorage.removeItem('incomes');
    localStorage.removeItem('expenses');
    document.getElementById('income').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('expense').value = '';
    document.getElementById('expenseAmount').value = '';
    updateUI();
}

// Function to logout and clear income and expense records
function logout() {
   
    window.location.href = 'index.html';
}

// Initial call to update UI on page load
document.addEventListener('DOMContentLoaded', updateUI);
