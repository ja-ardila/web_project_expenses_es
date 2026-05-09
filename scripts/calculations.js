let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let expenseEntry of expenseEntries) {
  totalExpensesValue += expenseEntry[1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  balance = calculateBalance();
  if (balance < 0) {
    return (balanceColor = "red");
  } else if (balance < budgetValue * 0.25) {
    return (balanceColor = "orange");
  } else {
    return (balanceColor = "green");
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (let expenseEntry of expenseEntries) {
    if (expenseEntry[0] != category) {
      continue;
    } else {
      categoryTotal += expenseEntry[1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let categoriesData = [];
  for (let category of categories) {
    categoriesData.push([category, calculateCategoryExpenses(category)]);
  }
  let largestCategory = ["groceries", calculateCategoryExpenses("groceries")];
  for (let category of categoriesData) {
    if (largestCategory[1] < category[1]) {
      largestCategory = category;
    }
  }
  return largestCategory[0];
}

function addExpenseEntry(expense) {
  expenseEntries.push(expense);
  totalExpensesValue += expense[1];
}
