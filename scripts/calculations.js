// Variables principales para guardar el presupuesto, los gastos totales y el color del saldo
let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

// Lista inicial de gastos. Cada gasto tiene una categoría y un valor
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

// Calcula el total inicial de gastos sumando el valor de cada entrada
for (let expenseEntry of expenseEntries) {
  totalExpensesValue += expenseEntry[1];
}

// Calcula el promedio de gastos
function calculateAverageExpense() {
  // Si no hay gastos, devuelve 0 para evitar dividir entre cero
  if (expenseEntries.length === 0) {
    return 0;
  }

  return totalExpensesValue / expenseEntries.length;
}

// Calcula el saldo restante restando los gastos al presupuesto
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

// Actualiza el color del saldo según el dinero disponible
function updateBalanceColor() {
  let balance = calculateBalance();

  // Si el saldo es negativo, el color será rojo
  if (balance < 0) {
    return (balanceColor = "red");

    // Si queda menos del 25% del presupuesto, el color será naranja
  } else if (balance < budgetValue * 0.25) {
    return (balanceColor = "orange");

    // Si el saldo está bien, el color será verde
  } else {
    return (balanceColor = "green");
  }
}

// Calcula el total de gastos de una categoría específica
function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  // Recorre todos los gastos y suma solo los que coinciden con la categoría indicada
  for (let expenseEntry of expenseEntries) {
    if (expenseEntry[0] != category) {
      continue;
    } else {
      categoryTotal += expenseEntry[1];
    }
  }

  return categoryTotal;
}

// Encuentra la categoría con el mayor total de gastos
function calculateLargestCategory() {
  // Lista de categorías disponibles
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  // Guarda cada categoría junto con su total de gastos
  let categoriesData = [];

  for (let category of categories) {
    categoriesData.push([category, calculateCategoryExpenses(category)]);
  }

  // Se toma groceries como valor inicial para comparar
  let largestCategory = ["groceries", calculateCategoryExpenses("groceries")];

  // Compara los totales y guarda la categoría con mayor gasto
  for (let category of categoriesData) {
    if (largestCategory[1] < category[1]) {
      largestCategory = category;
    }
  }

  return largestCategory[0];
}

// Agrega un nuevo gasto a la lista y actualiza el total de gastos
function addExpenseEntry(expense) {
  expenseEntries.push(expense);
  totalExpensesValue += expense[1];
}
