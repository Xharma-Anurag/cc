
import React from 'react';
export default function Transactions() {
  const transactions = [
    { id: 1, date: '2025-05-01', amount: '-$250', description: 'Online Shopping' },
    { id: 2, date: '2025-05-03', amount: '+$1000', description: 'Salary Credit' },
    { id: 3, date: '2025-05-05', amount: '-$120', description: 'Electricity Bill' },
  ];
  return (
    <div>
      <h1 className="text-2xl mb-4">Transaction History</h1>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>
            {tx.date}: {tx.amount} ({tx.description})
          </li>
        ))}
      </ul>
    </div>
  );
}
