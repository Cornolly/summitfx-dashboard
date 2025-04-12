// src/components/QuoteDashboard.jsx

import React, { useEffect, useState } from 'react';

const QuoteDashboard = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/quotes`)
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error("Failed to fetch quotes:", err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Quote Dashboard</h2>
      {quotes.length === 0 ? (
        <p>Loading or no quotes yet...</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Phone</th>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Final</th>
              <th>Rate</th>
              <th>Live</th>
              <th>Margin</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((q, idx) => (
              <tr key={idx}>
                <td>{q.phone}</td>
                <td>{q.trade_type}</td>
                <td>{q.from_currency}</td>
                <td>{q.to_currency}</td>
                <td>{q.amount}</td>
                <td>{q.final_amount}</td>
                <td>{q.client_rate}</td>
                <td>{q.exchange_rate}</td>
                <td>{q.client_margin}%</td>
                <td>{new Date(q.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuoteDashboard;
