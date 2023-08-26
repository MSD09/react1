import React from 'react';

function App() {
  const expenses = [
    { id: 'e1', title: 'Food', amount: 10 },
    { id: 'e2', title: 'Petrol', amount: 100 },
    { id: 'e3', title: 'Movies', amount: 200 },
  ];

  return (
    <div>
      <h1>Expense Items</h1>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.title} Rs {expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;





